"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarList = exports.Avatar = exports.AvatarBase = void 0;
const zod_1 = require("zod");
const constellation_module_1 = require("./constellation.module");
const costume_module_1 = require("./costume.module");
const element_module_1 = require("./element.module");
const reliquary_module_1 = require("./reliquary.module");
const weapon_module_1 = require("./weapon.module");
exports.AvatarBase = zod_1.z.object({
    image: zod_1.z.string().url().optional(),
    name: zod_1.z.string(),
    element: element_module_1.Element,
    rarity: zod_1.z.number().gte(1).lte(5),
    constellations: zod_1.z.array(constellation_module_1.Constellation),
    costumes: zod_1.z.array(costume_module_1.Costume).optional(),
});
exports.Avatar = exports.AvatarBase.extend({
    icon: zod_1.z.string().url().optional(),
    element: element_module_1.Element,
    fetter: zod_1.z.number().gte(0).lte(10),
    level: zod_1.z.number().gte(1).lte(90),
    weapon: weapon_module_1.Weapon.optional(),
    reliquaries: zod_1.z.array(reliquary_module_1.Reliquary).optional(),
    actived_constellation_num: zod_1.z.number().default(0),
    external: zod_1.z.any().optional(),
});
exports.AvatarList = zod_1.z.array(exports.Avatar);
