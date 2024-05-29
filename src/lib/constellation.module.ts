import { z } from "zod";

export const Constellation = z.object({
  name: z.string(),
  icon: z.string().url().optional(),
  effect: z.string(),
  is_actived: z.boolean().default(false),
  pos: z.number(),
});

export type Constellation = z.infer<typeof Constellation>;
