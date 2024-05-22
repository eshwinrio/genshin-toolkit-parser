"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reliquary = exports.ReliquaryBase = exports.ReliquarySet = exports.ReliquaryAffix = void 0;
const zod_1 = require("zod");
exports.ReliquaryAffix = zod_1.z.object({
    activation_number: zod_1.z.number(),
    effect: zod_1.z.string(),
});
exports.ReliquarySet = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    affixes: zod_1.z.array(exports.ReliquaryAffix),
});
exports.ReliquaryBase = zod_1.z.object({
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    pos: zod_1.z.number(),
    rarity: zod_1.z.number(),
    set: exports.ReliquarySet,
    pos_name: zod_1.z.string(),
});
exports.Reliquary = exports.ReliquaryBase.extend({
    level: zod_1.z.number().min(0).max(20),
});
