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
    id: z.ZodNumber;
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
    id: number;
    affixes: {
        effect: string;
        activation_number: number;
    }[];
}, {
    name: string;
    id: number;
    affixes: {
        effect: string;
        activation_number: number;
    }[];
}>;
export declare const ReliquaryBase: z.ZodObject<{
    name: z.ZodString;
    icon: z.ZodString;
    pos: z.ZodNumber;
    rarity: z.ZodNumber;
    set: z.ZodObject<{
        id: z.ZodNumber;
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
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }, {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }>;
    pos_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    name: string;
    rarity: number;
    icon: string;
    pos: number;
    pos_name: string;
}, {
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    name: string;
    rarity: number;
    icon: string;
    pos: number;
    pos_name: string;
}>;
export declare const Reliquary: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    icon: z.ZodString;
    pos: z.ZodNumber;
    rarity: z.ZodNumber;
    set: z.ZodObject<{
        id: z.ZodNumber;
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
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }, {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    }>;
    pos_name: z.ZodString;
}, {
    level: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    level: number;
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    name: string;
    rarity: number;
    icon: string;
    pos: number;
    pos_name: string;
}, {
    level: number;
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    name: string;
    rarity: number;
    icon: string;
    pos: number;
    pos_name: string;
}>;
export type ReliquaryAffix = z.infer<typeof ReliquaryAffix>;
export type ReliquarySet = z.infer<typeof ReliquarySet>;
export type ReliquaryBase = z.infer<typeof ReliquaryBase>;
export type Reliquary = z.infer<typeof Reliquary>;
