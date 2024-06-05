import { z } from "zod";
export declare const ReliquaryAffix: z.ZodObject<{
    activation_number: z.ZodNumber;
    effect: z.ZodString;
}, "strip", z.ZodTypeAny, {
    effect: string;
    activation_number: number;
}, {
    effect: string;
    activation_number: number;
}>;
export declare const ReliquarySet: z.ZodObject<{
    name: z.ZodString;
    affixes: z.ZodArray<z.ZodObject<{
        activation_number: z.ZodNumber;
        effect: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        effect: string;
        activation_number: number;
    }, {
        effect: string;
        activation_number: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    affixes: {
        effect: string;
        activation_number: number;
    }[];
}, {
    name: string;
    affixes: {
        effect: string;
        activation_number: number;
    }[];
}>;
export declare const ReliquaryBase: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    pos: z.ZodNumber;
    rarity: z.ZodNumber;
    set: z.ZodObject<{
        name: z.ZodString;
        affixes: z.ZodArray<z.ZodObject<{
            activation_number: z.ZodNumber;
            effect: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            effect: string;
            activation_number: number;
        }, {
            effect: string;
            activation_number: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }, {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }>;
    pos_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    pos: number;
    set: {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    rarity: number;
    pos_name: string;
    icon?: string | undefined;
}, {
    name: string;
    pos: number;
    set: {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    rarity: number;
    pos_name: string;
    icon?: string | undefined;
}>;
export declare const Reliquary: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    pos: z.ZodNumber;
    rarity: z.ZodNumber;
    set: z.ZodObject<{
        name: z.ZodString;
        affixes: z.ZodArray<z.ZodObject<{
            activation_number: z.ZodNumber;
            effect: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            effect: string;
            activation_number: number;
        }, {
            effect: string;
            activation_number: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }, {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }>;
    pos_name: z.ZodString;
}, {
    level: z.ZodDefault<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    pos: number;
    set: {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    rarity: number;
    pos_name: string;
    level: number;
    icon?: string | undefined;
}, {
    name: string;
    pos: number;
    set: {
        name: string;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    rarity: number;
    pos_name: string;
    icon?: string | undefined;
    level?: number | undefined;
}>;
export type ReliquaryAffix = z.infer<typeof ReliquaryAffix>;
export type ReliquarySet = z.infer<typeof ReliquarySet>;
export type ReliquaryBase = z.infer<typeof ReliquaryBase>;
export type Reliquary = z.infer<typeof Reliquary>;
