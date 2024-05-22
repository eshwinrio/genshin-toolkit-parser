import { z } from "zod";


export const MhyResponse = z.object({
  retcode: z.number(),
  message: z.string(),
  message_cn: z.string().optional(),
  message_en: z.string().optional(),
  data: z.any(),
});

export type MhyResponse = z.infer<typeof MhyResponse>;
