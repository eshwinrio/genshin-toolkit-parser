import { z } from "zod";
export declare const MhyResponse: z.ZodObject<{
    retcode: z.ZodNumber;
    message: z.ZodString;
    data: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    message: string;
    retcode: number;
    data?: any;
}, {
    message: string;
    retcode: number;
    data?: any;
}>;
export type MhyResponse = z.infer<typeof MhyResponse>;
