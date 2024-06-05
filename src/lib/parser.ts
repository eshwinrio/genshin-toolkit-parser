import { AvatarList } from "./avatar.module";
import { DataProvider } from "./data-provider";
import { GameData } from "./gamedata-schema";
import { HAR } from "./har.module";
import { MhyResponse } from "./mhyresponse.module";
import { Role } from "./role.module";

export const GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api";

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

/**
 * Load game data from file
 * @param source The data source of the file
 */
export async function loadFromFile(source: DataProvider): Promise<GameData> {
    const buffer = await source.load();
    const gameData = JSON.parse(buffer.toString('utf-8'));
    return GameData.parse(gameData);
}
