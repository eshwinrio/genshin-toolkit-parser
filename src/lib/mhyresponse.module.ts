import { z } from "zod";

export const MhyResponse = z.object({
  retcode: z.number(),
  message: z.string(),
  data: z.any(),
});

export type MhyResponse = z.infer<typeof MhyResponse>;
