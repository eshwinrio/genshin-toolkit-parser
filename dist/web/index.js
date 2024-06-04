"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFromHar = exports.loadFromFile = exports.GAME_RECORD_API_BASEURL = exports.StringDataProvider = exports.FileDataProvider = exports.BufferDataProvider = exports.MhyResponse = exports.Har = exports.GameData = void 0;
var gamedata_schema_1 = require("./lib/gamedata-schema");
Object.defineProperty(exports, "GameData", { enumerable: true, get: function () { return gamedata_schema_1.GameData; } });
exports.Har = __importStar(require("./lib/har.module"));
var mhyresponse_module_1 = require("./lib/mhyresponse.module");
Object.defineProperty(exports, "MhyResponse", { enumerable: true, get: function () { return mhyresponse_module_1.MhyResponse; } });
var data_provider_1 = require("./lib/data-provider");
Object.defineProperty(exports, "BufferDataProvider", { enumerable: true, get: function () { return data_provider_1.BufferDataProvider; } });
Object.defineProperty(exports, "FileDataProvider", { enumerable: true, get: function () { return data_provider_1.FileDataProvider; } });
Object.defineProperty(exports, "StringDataProvider", { enumerable: true, get: function () { return data_provider_1.StringDataProvider; } });
var parser_1 = require("./lib/parser");
Object.defineProperty(exports, "GAME_RECORD_API_BASEURL", { enumerable: true, get: function () { return parser_1.GAME_RECORD_API_BASEURL; } });
Object.defineProperty(exports, "loadFromFile", { enumerable: true, get: function () { return parser_1.loadFromFile; } });
Object.defineProperty(exports, "loadFromHar", { enumerable: true, get: function () { return parser_1.loadFromHar; } });
