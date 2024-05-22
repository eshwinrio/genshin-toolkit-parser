import { z } from "zod";

export const WeaponType = z.enum(["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]);

export const WeaponBase = z.object({
  name: z.string(),
  icon: z.string().url(),
  type: z.number(),
  rarity: z.number().gte(1).lte(5),
  type_name: WeaponType,
  desc: z.string().optional(),
});

export const Weapon = WeaponBase.extend({
  level: z.number().gte(1).lte(90),
  promote_level: z.number().gte(0).lte(6),
  affix_level: z.number().gte(0).lte(5),
});

export type WeaponType = z.infer<typeof WeaponType>;
export type WeaponBase = z.infer<typeof WeaponBase>;
export type Weapon = z.infer<typeof Weapon>;
