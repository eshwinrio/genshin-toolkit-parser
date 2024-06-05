import { z } from "zod";
export declare const Constellation: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    effect: z.ZodString;
    is_actived: z.ZodDefault<z.ZodBoolean>;
    pos: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    effect: string;
    is_actived: boolean;
    pos: number;
    icon?: string | undefined;
}, {
    name: string;
    effect: string;
    pos: number;
    icon?: string | undefined;
    is_actived?: boolean | undefined;
}>;
export type Constellation = z.infer<typeof Constellation>;
