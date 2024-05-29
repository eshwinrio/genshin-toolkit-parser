import { z } from "zod";

export const Costume = z.object({
  name: z.string(),
  icon: z.string().url().optional(),
});

export type Costume = z.infer<typeof Costume>;
