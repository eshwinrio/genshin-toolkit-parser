import { WriteFileOptions, readFile, writeFile } from "fs";
import { AvatarList } from "./avatar.module";
import { GameData } from "./gamedata-schema";
import { HAR } from "./har.module";
import { MhyResponse } from "./mhyresponse.module";
import { Role } from "./role.module";

export const GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api"

/**
 * Interface for data provider.
 */
export interface DataProvider {
    /**
     * Load data from provided source
     */
    load(): Promise<Buffer>;
}

/**
 * Data provider that loads data from a serialized string object.
 */
export class StringDataProvider implements DataProvider {
    constructor(private readonly data: string) { }
    load() {
        return Promise.resolve(Buffer.from(this.data));
    }
}

/**
 * Data provider that loads data from a buffer.
 */
export class BufferDataProvider implements DataProvider {
    constructor(private readonly buffer: Buffer) { }
    load() {
        return Promise.resolve(this.buffer);
    }
}

/**
 * Data provider that loads data from a HAR file.
 */
export class FileDataProvider implements DataProvider {
    constructor(private readonly path: string) { }
    load() {
        return new Promise<Buffer>((resolve, reject) => {
            readFile(this.path, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}


export class GameDataFactory {
    
    private constructor(private _gamedata: GameData) { }

    get gameData() {
        return this._gamedata;
    }

    /**
     * Load game data from HAR file
     * @param source The data source of the HAR file
     */
    static async loadFromHar(source: DataProvider): Promise<GameDataFactory> {
        // Stage 1: Parse HAR file
        const buffer = await source.load();
        const harData = JSON.parse(buffer.toString('utf-8'));
        const parsedHar = HAR.parse(harData);

        // Stage 2: Filter entries
        if (!parsedHar.log) {
            throw new Error("No http log found in HAR file");
        }

        const filteredEntries = parsedHar.log?.entries?.filter((entry) =>
            entry.request?.url?.startsWith(GAME_RECORD_API_BASEURL)
        ) ?? [];

        // Stage 3: Extract traveler info
        const basicInfoEntry = filteredEntries.find((entry) =>
            entry.request?.url?.startsWith(GAME_RECORD_API_BASEURL + "/index")
        );
        const rawTravelerInfo = basicInfoEntry?.response?.content?.text
            ? MhyResponse.parse(JSON.parse(basicInfoEntry.response.content.text))
            : null;
        const role = rawTravelerInfo ? Role.parse(rawTravelerInfo.data.role) : null;

        // Stage 4: Extract character data
        const characterData = filteredEntries.find((entry) =>
            entry.request?.url?.startsWith(GAME_RECORD_API_BASEURL + "/character")
        );
        const rawCharacterData = characterData?.response?.content?.text
            ? MhyResponse.parse(JSON.parse(characterData.response.content.text))
            : null;
        const avatars = rawCharacterData ? AvatarList.parse(rawCharacterData.data.avatars) : null;

        return new GameDataFactory(GameData.parse({ role, avatars }));
    }

    /**
     * Load game data from file
     * @param source The data source of the file
     */
    static async loadFromFile(source: DataProvider): Promise<GameDataFactory> {
        const buffer = await source.load();
        const gameData = JSON.parse(buffer.toString('utf-8'));
        return new GameDataFactory(GameData.parse(gameData));
    }

    /**
     * Save game data to file
     * @param path The path to save the file to
     * @param options The options for writing the file
     */
    saveToFile(path: string, options: WriteFileOptions = { encoding: 'utf-8' }) {
        return new Promise<void>((resolve, reject) => {
            writeFile(path, JSON.stringify(this.gameData, null, 2), options, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
}
