"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const parser_1 = require("../lib/parser");
(0, fs_1.readFile)("/home/rio/resources/act.hoyolab.com.har", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const bufferDataProvider = new parser_1.BufferDataProvider(data);
    (0, parser_1.loadFromHar)(bufferDataProvider).then(data => {
        console.table(data.role);
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
