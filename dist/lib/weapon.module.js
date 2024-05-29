"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = exports.WeaponBase = exports.WeaponType = void 0;
const zod_1 = require("zod");
exports.WeaponType = zod_1.z.enum(["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]);
exports.WeaponBase = zod_1.z.object({
    name: zod_1.z.string(),
    icon: zod_1.z.string().url().optional(),
    type: zod_1.z.number(),
    rarity: zod_1.z.number().gte(1).lte(5),
    type_name: exports.WeaponType,
    desc: zod_1.z.string().optional(),
});
exports.Weapon = exports.WeaponBase.extend({
    level: zod_1.z.number().gte(1).lte(90).default(0),
    promote_level: zod_1.z.number().gte(0).lte(6).default(0),
    affix_level: zod_1.z.number().gte(0).lte(5).default(0),
});
