"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameData = void 0;
const zod_1 = require("zod");
const avatar_module_1 = require("./avatar.module");
const role_module_1 = require("./role.module");
exports.GameData = zod_1.z.object({
    role: role_module_1.Role,
    avatars: zod_1.z.array(avatar_module_1.Avatar),
});
