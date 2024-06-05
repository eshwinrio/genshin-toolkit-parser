import { z } from "zod";
export declare const AvatarBase: z.ZodObject<{
    image: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
    rarity: z.ZodNumber;
    constellations: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    costumes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        icon?: string | undefined;
    }, {
        name: string;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    rarity: number;
    element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
    constellations: {
        name: string;
        effect: string;
        is_actived: boolean;
        pos: number;
        icon?: string | undefined;
    }[];
    image?: string | undefined;
    costumes?: {
        name: string;
        icon?: string | undefined;
    }[] | undefined;
}, {
    name: string;
    rarity: number;
    element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
    constellations: {
        name: string;
        effect: string;
        pos: number;
        icon?: string | undefined;
        is_actived?: boolean | undefined;
    }[];
    image?: string | undefined;
    costumes?: {
        name: string;
        icon?: string | undefined;
    }[] | undefined;
}>;
export declare const Avatar: z.ZodObject<z.objectUtil.extendShape<{
    image: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
    rarity: z.ZodNumber;
    constellations: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    costumes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        icon?: string | undefined;
    }, {
        name: string;
        icon?: string | undefined;
    }>, "many">>;
}, {
    icon: z.ZodOptional<z.ZodString>;
    element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
    fetter: z.ZodNumber;
    level: z.ZodNumber;
    weapon: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
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
    }>>;
    reliquaries: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
    }>, "many">>;
    actived_constellation_num: z.ZodDefault<z.ZodNumber>;
    external: z.ZodOptional<z.ZodAny>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    rarity: number;
    level: number;
    element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
    constellations: {
        name: string;
        effect: string;
        is_actived: boolean;
        pos: number;
        icon?: string | undefined;
    }[];
    fetter: number;
    actived_constellation_num: number;
    icon?: string | undefined;
    image?: string | undefined;
    costumes?: {
        name: string;
        icon?: string | undefined;
    }[] | undefined;
    weapon?: {
        name: string;
        type: number;
        rarity: number;
        level: number;
        type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
        promote_level: number;
        affix_level: number;
        icon?: string | undefined;
        desc?: string | undefined;
    } | undefined;
    reliquaries?: {
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
    }[] | undefined;
    external?: any;
}, {
    name: string;
    rarity: number;
    level: number;
    element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
    constellations: {
        name: string;
        effect: string;
        pos: number;
        icon?: string | undefined;
        is_actived?: boolean | undefined;
    }[];
    fetter: number;
    icon?: string | undefined;
    image?: string | undefined;
    costumes?: {
        name: string;
        icon?: string | undefined;
    }[] | undefined;
    weapon?: {
        name: string;
        type: number;
        rarity: number;
        type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
        icon?: string | undefined;
        level?: number | undefined;
        desc?: string | undefined;
        promote_level?: number | undefined;
        affix_level?: number | undefined;
    } | undefined;
    reliquaries?: {
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
    }[] | undefined;
    actived_constellation_num?: number | undefined;
    external?: any;
}>;
export declare const AvatarList: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
    image: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
    rarity: z.ZodNumber;
    constellations: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    costumes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        icon?: string | undefined;
    }, {
        name: string;
        icon?: string | undefined;
    }>, "many">>;
}, {
    icon: z.ZodOptional<z.ZodString>;
    element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
    fetter: z.ZodNumber;
    level: z.ZodNumber;
    weapon: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
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
    }>>;
    reliquaries: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
    }>, "many">>;
    actived_constellation_num: z.ZodDefault<z.ZodNumber>;
    external: z.ZodOptional<z.ZodAny>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    rarity: number;
    level: number;
    element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
    constellations: {
        name: string;
        effect: string;
        is_actived: boolean;
        pos: number;
        icon?: string | undefined;
    }[];
    fetter: number;
    actived_constellation_num: number;
    icon?: string | undefined;
    image?: string | undefined;
    costumes?: {
        name: string;
        icon?: string | undefined;
    }[] | undefined;
    weapon?: {
        name: string;
        type: number;
        rarity: number;
        level: number;
        type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
        promote_level: number;
        affix_level: number;
        icon?: string | undefined;
        desc?: string | undefined;
    } | undefined;
    reliquaries?: {
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
    }[] | undefined;
    external?: any;
}, {
    name: string;
    rarity: number;
    level: number;
    element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
    constellations: {
        name: string;
        effect: string;
        pos: number;
        icon?: string | undefined;
        is_actived?: boolean | undefined;
    }[];
    fetter: number;
    icon?: string | undefined;
    image?: string | undefined;
    costumes?: {
        name: string;
        icon?: string | undefined;
    }[] | undefined;
    weapon?: {
        name: string;
        type: number;
        rarity: number;
        type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
        icon?: string | undefined;
        level?: number | undefined;
        desc?: string | undefined;
        promote_level?: number | undefined;
        affix_level?: number | undefined;
    } | undefined;
    reliquaries?: {
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
    }[] | undefined;
    actived_constellation_num?: number | undefined;
    external?: any;
}>, "many">;
export type AvatarBase = z.infer<typeof AvatarBase>;
export type Avatar = z.infer<typeof Avatar>;
export type AvatarList = z.infer<typeof AvatarList>;
