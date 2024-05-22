import { z } from "zod";
export declare const MhyResponse: z.ZodObject<{
    retcode: z.ZodNumber;
    message: z.ZodString;
    message_cn: z.ZodOptional<z.ZodString>;
    message_en: z.ZodOptional<z.ZodString>;
    data: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    retcode: number;
    message: string;
    message_cn?: string | undefined;
    message_en?: string | undefined;
    data?: any;
}, {
    retcode: number;
    message: string;
    message_cn?: string | undefined;
    message_en?: string | undefined;
    data?: any;
}>;
export type MhyResponse = z.infer<typeof MhyResponse>;
