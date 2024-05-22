"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFromHar = exports.FileDataProvider = exports.BufferDataProvider = exports.GAME_RECORD_API_BASEURL = void 0;
const fs_1 = require("fs");
const gamedata_schema_1 = require("./gamedata-schema");
const har_module_1 = require("./har.module");
const mhyresponse_module_1 = require("./mhyresponse.module");
const role_module_1 = require("./role.module");
const avatar_module_1 = require("./avatar.module");
exports.GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api";
class BufferDataProvider {
    constructor(buffer) {
        this.buffer = buffer;
    }
    load() {
        return Promise.resolve(this.buffer);
    }
}
exports.BufferDataProvider = BufferDataProvider;
class FileDataProvider {
    constructor(path) {
        this.path = path;
    }
    load() {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(this.path, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
exports.FileDataProvider = FileDataProvider;
/**
 * Load game data from HAR file
 * @param source The data source of the HAR file
 */
function loadFromHar(source) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g;
        // Stage 1: Parse HAR file
        const buffer = yield source.load();
        const harData = JSON.parse(buffer.toString('utf-8'));
        const parsedHar = har_module_1.HAR.parse(harData);
        // Stage 2: Filter entries
        if (!parsedHar.log) {
            throw new Error("No http log found in HAR file");
        }
        const filteredEntries = (_c = (_b = (_a = parsedHar.log) === null || _a === void 0 ? void 0 : _a.entries) === null || _b === void 0 ? void 0 : _b.filter((entry) => { var _a, _b; return (_b = (_a = entry.request) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.startsWith(exports.GAME_RECORD_API_BASEURL); })) !== null && _c !== void 0 ? _c : [];
        // Stage 3: Extract traveler info
        const basicInfoEntry = filteredEntries.find((entry) => { var _a, _b; return (_b = (_a = entry.request) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.startsWith(exports.GAME_RECORD_API_BASEURL + "/index"); });
        const rawTravelerInfo = ((_e = (_d = basicInfoEntry === null || basicInfoEntry === void 0 ? void 0 : basicInfoEntry.response) === null || _d === void 0 ? void 0 : _d.content) === null || _e === void 0 ? void 0 : _e.text)
            ? mhyresponse_module_1.MhyResponse.parse(JSON.parse(basicInfoEntry.response.content.text))
            : null;
        const role = rawTravelerInfo ? role_module_1.Role.parse(rawTravelerInfo.data.role) : null;
        // Stage 4: Extract character data
        const characterData = filteredEntries.find((entry) => { var _a, _b; return (_b = (_a = entry.request) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.startsWith(exports.GAME_RECORD_API_BASEURL + "/character"); });
        const rawCharacterData = ((_g = (_f = characterData === null || characterData === void 0 ? void 0 : characterData.response) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.text)
            ? mhyresponse_module_1.MhyResponse.parse(JSON.parse(characterData.response.content.text))
            : null;
        const avatars = rawCharacterData ? avatar_module_1.AvatarList.parse(rawCharacterData.data.avatars) : null;
        return gamedata_schema_1.GameData.parse({ role, avatars });
    });
}
exports.loadFromHar = loadFromHar;
