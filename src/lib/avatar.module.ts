import { z } from "zod";
import { Constellation } from "./constellation.module";
import { Costume } from "./costume.module";
import { Element } from "./element.module";
import { Reliquary } from "./reliquary.module";
import { Weapon } from "./weapon.module";

export const AvatarBase = z.object({
  image: z.string().url(),
  name: z.string(),
  element: Element,
  rarity: z.number().gte(1).lte(5),
  constellations: z.array(Constellation),
  costumes: z.array(Costume).optional(),
});

export const Avatar = AvatarBase.extend({
  icon: z.string().url().optional(),
  element: Element,
  fetter: z.number().gte(0).lte(10),
  level: z.number().gte(1).lte(90),
  weapon: Weapon.optional(),
  reliquaries: z.array(Reliquary).optional(),
  actived_constellation_num: z.number(),
  external: z.any()
});

export const AvatarList = z.array(Avatar);

export type AvatarBase = z.infer<typeof AvatarBase>;
export type Avatar = z.infer<typeof Avatar>;
export type AvatarList = z.infer<typeof AvatarList>;
