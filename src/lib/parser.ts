import { readFile } from "fs";
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

export interface LoadFromHarOptions {
    readonly hoyolabApi?: string;
}

/**
 * Load game data from HAR file
 * @param source The data source of the HAR file
 */
export async function loadFromHar(source: DataProvider): Promise<GameData> {
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
    
    return GameData.parse({ role, avatars });
}
