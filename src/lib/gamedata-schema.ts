import { z } from "zod";

export const Element = z.enum(["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]);

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

export const ReliquaryAffix = z.object({
  activation_number: z.number(),
  effect: z.string(),
});

export const ReliquarySet = z.object({
  id: z.number(),
  name: z.string(),
  affixes: z.array(ReliquaryAffix),
});

export const ReliquaryBase = z.object({
  name: z.string(),
  icon: z.string().url(),
  pos: z.number(),
  rarity: z.number(),
  set: ReliquarySet,
  pos_name: z.string(),
});

export const Reliquary = ReliquaryBase.extend({
  level: z.number().min(0).max(20),
});

export const Constellation = z.object({
  id: z.number().optional(),
  name: z.string(),
  icon: z.string().url(),
  effect: z.string(),
  is_actived: z.boolean(),
  pos: z.number(),
});

export const Costume = z.object({
  id: z.number(),
  name: z.string(),
  icon: z.string().url(),
});

export const CharacterBase = z.object({
  image: z.string().url(),
  name: z.string(),
  element: Element,
  rarity: z.number().gte(1).lte(5),
  constellations: z.array(Constellation),
  costumes: z.array(Costume).optional(),
});

export const Character = CharacterBase.extend({
  icon: z.string().url().optional(),
  element: Element,
  fetter: z.number().gte(0).lte(10),
  level: z.number().gte(1).lte(90),
  weapon: Weapon.optional(),
  reliquaries: z.array(Reliquary).optional(),
  actived_constellation_num: z.number(),
  external: z.any()
});

export const TravelerRole = z.object({
  AvatarUrl: z.string(),
  nickname: z.string(),
  region: z.string(),
  level: z.number().gte(1).lte(60),
  game_head_icon: z.string().url(),
});

export const MyCharacters = z.array(Character)

export const GameData = z.object({
  role: TravelerRole,
  avatars: MyCharacters,
});

export type Element = z.infer<typeof Element>;
export type WeaponType = z.infer<typeof WeaponType>;
export type WeaponBase = z.infer<typeof WeaponBase>;
export type Weapon = z.infer<typeof Weapon>;
export type ReliquaryAffix = z.infer<typeof ReliquaryAffix>;
export type ReliquarySet = z.infer<typeof ReliquarySet>;
export type ReliquaryBase = z.infer<typeof ReliquaryBase>;
export type Reliquary = z.infer<typeof Reliquary>;
export type Constellation = z.infer<typeof Constellation>;
export type Costume = z.infer<typeof Costume>;
export type CharacterBase = z.infer<typeof CharacterBase>;
export type Character = z.infer<typeof Character>;
export type TravelerRole = z.infer<typeof TravelerRole>;
export type MyCharacters = z.infer<typeof MyCharacters>;
export type GameData = z.infer<typeof GameData>;
