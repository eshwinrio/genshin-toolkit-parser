import { z } from "zod";
export declare const Role: z.ZodObject<{
    AvatarUrl: z.ZodString;
    nickname: z.ZodString;
    region: z.ZodString;
    level: z.ZodNumber;
    game_head_icon: z.ZodString;
}, "strip", z.ZodTypeAny, {
    AvatarUrl: string;
    nickname: string;
    region: string;
    level: number;
    game_head_icon: string;
}, {
    AvatarUrl: string;
    nickname: string;
    region: string;
    level: number;
    game_head_icon: string;
}>;
export type Role = z.infer<typeof Role>;
