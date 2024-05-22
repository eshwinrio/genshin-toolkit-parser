import { z } from "zod";
export declare const Costume: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    icon: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    icon: string;
}, {
    name: string;
    id: number;
    icon: string;
}>;
export type Costume = z.infer<typeof Costume>;
