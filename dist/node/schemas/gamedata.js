"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameData = void 0;
const zod_1 = require("zod");
const avatar_1 = require("./avatar");
const role_1 = require("./role");
exports.GameData = zod_1.z.object({
    role: role_1.Role,
    avatars: zod_1.z.array(avatar_1.Avatar),
});
