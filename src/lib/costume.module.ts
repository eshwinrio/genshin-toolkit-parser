import { z } from "zod";

export const Costume = z.object({
  id: z.number(),
  name: z.string(),
  icon: z.string().url(),
});

export type Costume = z.infer<typeof Costume>;
