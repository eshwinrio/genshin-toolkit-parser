import { z } from "zod";

export const Role = z.object({
  AvatarUrl: z.string().optional(),
  nickname: z.string(),
  region: z.string().optional(),
  level: z.number().gte(1).lte(60),
  game_head_icon: z.string().url().optional(),
});

export type Role = z.infer<typeof Role>;
