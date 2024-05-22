"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constellation = void 0;
const zod_1 = require("zod");
exports.Constellation = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    effect: zod_1.z.string(),
    is_actived: zod_1.z.boolean(),
    pos: zod_1.z.number(),
});
