import { readFile } from "fs";
import { GameData, MyCharacters, TravelerRole } from "./gamedata-schema";
import { HAR } from "./har-schema";
import { MhyResponse } from "./mhy-internal-schema";

export const GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api"

export interface DataProvider {
    load(): Promise<Buffer>;
}

export class BufferDataProvider implements DataProvider {
    constructor(private readonly buffer: Buffer) { }
    load() {
        return Promise.resolve(this.buffer);
    }
}

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
    const role = rawTravelerInfo ? TravelerRole.parse(rawTravelerInfo.data.role) : null;

    // Stage 4: Extract character data
    const characterData = filteredEntries.find((entry) =>
        entry.request?.url?.startsWith(GAME_RECORD_API_BASEURL + "/character")
    );
    const rawCharacterData = characterData?.response?.content?.text
        ? MhyResponse.parse(JSON.parse(characterData.response.content.text))
        : null;
    const avatars = rawCharacterData ? MyCharacters.parse(rawCharacterData.data.avatars) : null;
    
    return GameData.parse({ role, avatars });
}
