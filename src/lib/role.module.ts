import { z } from "zod";

export const Role = z.object({
  AvatarUrl: z.string(),
  nickname: z.string(),
  region: z.string(),
  level: z.number().gte(1).lte(60),
  game_head_icon: z.string().url(),
});

export type Role = z.infer<typeof Role>;
