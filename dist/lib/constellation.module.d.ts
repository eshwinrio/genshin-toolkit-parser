import { z } from "zod";
export declare const Constellation: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    icon: z.ZodString;
    effect: z.ZodString;
    is_actived: z.ZodBoolean;
    pos: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    icon: string;
    effect: string;
    is_actived: boolean;
    pos: number;
    id?: number | undefined;
}, {
    name: string;
    icon: string;
    effect: string;
    is_actived: boolean;
    pos: number;
    id?: number | undefined;
}>;
export type Constellation = z.infer<typeof Constellation>;
