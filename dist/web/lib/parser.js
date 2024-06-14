"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFromFile = exports.loadFromHar = exports.GAME_RECORD_API_BASEURL = void 0;
const avatar_1 = require("../schemas/avatar");
const gamedata_1 = require("../schemas/gamedata");
const har_1 = require("../schemas/har");
const mhyresponse_1 = require("../schemas/mhyresponse");
const role_1 = require("../schemas/role");
exports.GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api";
async function loadFromHar(source) {
    // Stage 1: Parse HAR file
    const buffer = await source.load();
    const harData = JSON.parse(buffer.toString('utf-8'));
    const parsedHar = har_1.HAR.parse(harData);
    // Stage 2: Filter entries
    if (!parsedHar.log) {
        throw new Error("No http log found in HAR file");
    }
    const filteredEntries = parsedHar.log?.entries?.filter((entry) => entry.request?.url?.startsWith(exports.GAME_RECORD_API_BASEURL)) ?? [];
    // Stage 3: Extract traveler info
    const basicInfoEntry = filteredEntries.find((entry) => entry.request?.url?.startsWith(exports.GAME_RECORD_API_BASEURL + "/index"));
    const rawTravelerInfo = basicInfoEntry?.response?.content?.text
        ? mhyresponse_1.MhyResponse.parse(JSON.parse(basicInfoEntry.response.content.text))
        : null;
    const role = rawTravelerInfo ? role_1.Role.parse(rawTravelerInfo.data.role) : null;
    // Stage 4: Extract character data
    const characterData = filteredEntries.find((entry) => entry.request?.url?.startsWith(exports.GAME_RECORD_API_BASEURL + "/character"));
    const rawCharacterData = characterData?.response?.content?.text
        ? mhyresponse_1.MhyResponse.parse(JSON.parse(characterData.response.content.text))
        : null;
    const avatars = rawCharacterData ? avatar_1.AvatarList.parse(rawCharacterData.data.avatars) : null;
    return gamedata_1.GameData.parse({ role, avatars });
}
exports.loadFromHar = loadFromHar;
/**
 * Load game data from file
 * @param source The data source of the file
 */
async function loadFromFile(source) {
    const buffer = await source.load();
    const gameData = JSON.parse(buffer.toString('utf-8'));
    return gamedata_1.GameData.parse(gameData);
}
exports.loadFromFile = loadFromFile;
