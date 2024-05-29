import { z } from "zod";

export const ReliquaryAffix = z.object({
  activation_number: z.number(),
  effect: z.string(),
});

export const ReliquarySet = z.object({
  name: z.string(),
  affixes: z.array(ReliquaryAffix),
});

export const ReliquaryBase = z.object({
  name: z.string(),
  icon: z.string().url().optional(),
  pos: z.number(),
  rarity: z.number(),
  set: ReliquarySet,
  pos_name: z.string(),
});

export const Reliquary = ReliquaryBase.extend({
  level: z.number().min(0).max(20).default(0),
});

export type ReliquaryAffix = z.infer<typeof ReliquaryAffix>;
export type ReliquarySet = z.infer<typeof ReliquarySet>;
export type ReliquaryBase = z.infer<typeof ReliquaryBase>;
export type Reliquary = z.infer<typeof Reliquary>;
