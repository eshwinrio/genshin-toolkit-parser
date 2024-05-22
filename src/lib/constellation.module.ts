import { z } from "zod";

export const Constellation = z.object({
  id: z.number().optional(),
  name: z.string(),
  icon: z.string().url(),
  effect: z.string(),
  is_actived: z.boolean(),
  pos: z.number(),
});

export type Constellation = z.infer<typeof Constellation>;
