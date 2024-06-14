import { z } from "zod";
export declare const Costume: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    icon?: string | undefined;
}, {
    name: string;
    icon?: string | undefined;
}>;
export type Costume = z.infer<typeof Costume>;
