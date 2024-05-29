import { z } from "zod";
export declare const WeaponType: z.ZodEnum<["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]>;
export declare const WeaponBase: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodNumber;
    rarity: z.ZodNumber;
    type_name: z.ZodEnum<["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]>;
    desc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: number;
    rarity: number;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    icon?: string | undefined;
    desc?: string | undefined;
}, {
    name: string;
    type: number;
    rarity: number;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    icon?: string | undefined;
    desc?: string | undefined;
}>;
export declare const Weapon: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodNumber;
    rarity: z.ZodNumber;
    type_name: z.ZodEnum<["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]>;
    desc: z.ZodOptional<z.ZodString>;
}, {
    level: z.ZodDefault<z.ZodNumber>;
    promote_level: z.ZodDefault<z.ZodNumber>;
    affix_level: z.ZodDefault<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    type: number;
    rarity: number;
    level: number;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    promote_level: number;
    affix_level: number;
    icon?: string | undefined;
    desc?: string | undefined;
}, {
    name: string;
    type: number;
    rarity: number;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    icon?: string | undefined;
    level?: number | undefined;
    desc?: string | undefined;
    promote_level?: number | undefined;
    affix_level?: number | undefined;
}>;
export type WeaponType = z.infer<typeof WeaponType>;
export type WeaponBase = z.infer<typeof WeaponBase>;
export type Weapon = z.infer<typeof Weapon>;
