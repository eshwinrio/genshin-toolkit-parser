import { z } from "zod";
export declare const WeaponType: z.ZodEnum<["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]>;
export declare const WeaponBase: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodString;
    type: z.ZodNumber;
    rarity: z.ZodNumber;
    type_name: z.ZodEnum<["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]>;
    desc: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: number;
    name: string;
    rarity: number;
    icon: string;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    desc?: string | undefined;
}, {
    type: number;
    name: string;
    rarity: number;
    icon: string;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    desc?: string | undefined;
}>;
export declare const Weapon: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    icon: z.ZodString;
    type: z.ZodNumber;
    rarity: z.ZodNumber;
    type_name: z.ZodEnum<["Claymore", "Polearm", "Sword", "Bow", "Catalyst"]>;
    desc: z.ZodOptional<z.ZodString>;
}, {
    level: z.ZodNumber;
    promote_level: z.ZodNumber;
    affix_level: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    level: number;
    type: number;
    name: string;
    rarity: number;
    icon: string;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    promote_level: number;
    affix_level: number;
    desc?: string | undefined;
}, {
    level: number;
    type: number;
    name: string;
    rarity: number;
    icon: string;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    promote_level: number;
    affix_level: number;
    desc?: string | undefined;
}>;
export type WeaponType = z.infer<typeof WeaponType>;
export type WeaponBase = z.infer<typeof WeaponBase>;
export type Weapon = z.infer<typeof Weapon>;
