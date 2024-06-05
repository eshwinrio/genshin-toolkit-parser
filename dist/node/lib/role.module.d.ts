import { z } from "zod";
export declare const Role: z.ZodObject<{
    AvatarUrl: z.ZodOptional<z.ZodString>;
    nickname: z.ZodString;
    region: z.ZodOptional<z.ZodString>;
    level: z.ZodNumber;
    game_head_icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    level: number;
    nickname: string;
    AvatarUrl?: string | undefined;
    region?: string | undefined;
    game_head_icon?: string | undefined;
}, {
    level: number;
    nickname: string;
    AvatarUrl?: string | undefined;
    region?: string | undefined;
    game_head_icon?: string | undefined;
}>;
export type Role = z.infer<typeof Role>;
