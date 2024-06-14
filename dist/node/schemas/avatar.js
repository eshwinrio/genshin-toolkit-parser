"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarList = exports.Avatar = exports.AvatarBase = void 0;
const zod_1 = require("zod");
const constellation_1 = require("./constellation");
const costume_1 = require("./costume");
const element_1 = require("./element");
const reliquary_1 = require("./reliquary");
const weapon_1 = require("./weapon");
exports.AvatarBase = zod_1.z.object({
    image: zod_1.z.string().url().optional(),
    name: zod_1.z.string(),
    element: element_1.Element,
    rarity: zod_1.z.number().gte(1).lte(5),
    constellations: zod_1.z.array(constellation_1.Constellation),
    costumes: zod_1.z.array(costume_1.Costume).optional(),
});
exports.Avatar = exports.AvatarBase.extend({
    icon: zod_1.z.string().url().optional(),
    element: element_1.Element,
    fetter: zod_1.z.number().gte(0).lte(10),
    level: zod_1.z.number().gte(1).lte(90),
    weapon: weapon_1.Weapon.optional(),
    reliquaries: zod_1.z.array(reliquary_1.Reliquary).optional(),
    actived_constellation_num: zod_1.z.number().default(0),
    external: zod_1.z.any().optional(),
});
exports.AvatarList = zod_1.z.array(exports.Avatar);
