"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const zod_1 = require("zod");
exports.Role = zod_1.z.object({
    AvatarUrl: zod_1.z.string().optional(),
    nickname: zod_1.z.string(),
    region: zod_1.z.string().optional(),
    level: zod_1.z.number().gte(1).lte(60),
    game_head_icon: zod_1.z.string().url().optional(),
});
