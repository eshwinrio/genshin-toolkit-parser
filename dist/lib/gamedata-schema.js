"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameData = exports.MyCharacters = exports.TravelerRole = exports.Character = exports.CharacterBase = exports.Costume = exports.Constellation = exports.Reliquary = exports.ReliquaryBase = exports.ReliquarySet = exports.ReliquaryAffix = exports.Weapon = exports.WeaponBase = exports.WeaponType = exports.Element = void 0;
const zod_1 = require("zod");
exports.Element = zod_1.z.enum(["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]);
exports.WeaponType = zod_1.z.enum(["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]);
exports.WeaponBase = zod_1.z.object({
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    type: zod_1.z.number(),
    rarity: zod_1.z.number().gte(1).lte(5),
    type_name: exports.WeaponType,
    desc: zod_1.z.string().optional(),
});
exports.Weapon = exports.WeaponBase.extend({
    level: zod_1.z.number().gte(1).lte(90),
    promote_level: zod_1.z.number().gte(0).lte(6),
    affix_level: zod_1.z.number().gte(0).lte(5),
});
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
exports.Constellation = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
    effect: zod_1.z.string(),
    is_actived: zod_1.z.boolean(),
    pos: zod_1.z.number(),
});
exports.Costume = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    icon: zod_1.z.string().url(),
});
exports.CharacterBase = zod_1.z.object({
    image: zod_1.z.string().url(),
    name: zod_1.z.string(),
    element: exports.Element,
    rarity: zod_1.z.number().gte(1).lte(5),
    constellations: zod_1.z.array(exports.Constellation),
    costumes: zod_1.z.array(exports.Costume).optional(),
});
exports.Character = exports.CharacterBase.extend({
    icon: zod_1.z.string().url().optional(),
    element: exports.Element,
    fetter: zod_1.z.number().gte(0).lte(10),
    level: zod_1.z.number().gte(1).lte(90),
    weapon: exports.Weapon.optional(),
    reliquaries: zod_1.z.array(exports.Reliquary).optional(),
    actived_constellation_num: zod_1.z.number(),
    external: zod_1.z.any()
});
exports.TravelerRole = zod_1.z.object({
    AvatarUrl: zod_1.z.string(),
    nickname: zod_1.z.string(),
    region: zod_1.z.string(),
    level: zod_1.z.number().gte(1).lte(60),
    game_head_icon: zod_1.z.string().url(),
});
exports.MyCharacters = zod_1.z.array(exports.Character);
exports.GameData = zod_1.z.object({
    role: exports.TravelerRole,
    avatars: exports.MyCharacters,
});
