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
const fs_1 = require("fs");
const node_test_1 = __importStar(require("node:test"));
const parser_1 = require("../lib/parser");
(0, node_test_1.describe)("DataProvider tests for HAR", { concurrency: true, skip: !process.env.FS_PATH_TO_HAR }, (_suiteContext) => {
    (0, node_test_1.default)("FileDataProvider", (_testContext) => {
        const provider = new parser_1.FileDataProvider(process.env.FS_PATH_TO_HAR);
        (0, parser_1.loadFromHar)(provider).then(data => {
            console.table(data.avatars.map(avatar => {
                var _a, _b, _c;
                return ({
                    character: avatar.name,
                    level: avatar.level,
                    weapon: `${(_a = avatar.weapon) === null || _a === void 0 ? void 0 : _a.type_name}/${(_b = avatar.weapon) === null || _b === void 0 ? void 0 : _b.name} - lv${(_c = avatar.weapon) === null || _c === void 0 ? void 0 : _c.level}`,
                    friendship: `lv${avatar.fetter}`
                });
            }));
        });
    });
    (0, node_test_1.default)("BufferDataProvider", (_testContext) => {
        (0, fs_1.readFile)(process.env.FS_PATH_TO_HAR, (err, data) => {
            if (err) {
                throw err;
            }
            const bufferDataProvider = new parser_1.BufferDataProvider(data);
            (0, parser_1.loadFromHar)(bufferDataProvider).then(data => {
                console.table(data.avatars.map(avatar => {
                    var _a, _b, _c;
                    return ({
                        character: avatar.name,
                        level: avatar.level,
                        weapon: `${(_a = avatar.weapon) === null || _a === void 0 ? void 0 : _a.type_name}/${(_b = avatar.weapon) === null || _b === void 0 ? void 0 : _b.name} - lv${(_c = avatar.weapon) === null || _c === void 0 ? void 0 : _c.level}`,
                        friendship: `lv${avatar.fetter}`
                    });
                }));
            });
        });
    });
});
