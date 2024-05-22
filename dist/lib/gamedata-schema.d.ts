import { z } from "zod";
export declare const GameData: z.ZodObject<{
    role: z.ZodObject<{
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
    avatars: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        image: z.ZodString;
        name: z.ZodString;
        element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
        rarity: z.ZodNumber;
        constellations: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        costumes: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
    }, {
        icon: z.ZodOptional<z.ZodString>;
        element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
        fetter: z.ZodNumber;
        level: z.ZodNumber;
        weapon: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
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
        }>>;
        reliquaries: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        }>, "many">>;
        actived_constellation_num: z.ZodNumber;
        external: z.ZodAny;
    }>, "strip", z.ZodTypeAny, {
        level: number;
        image: string;
        name: string;
        element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
        rarity: number;
        constellations: {
            name: string;
            icon: string;
            effect: string;
            is_actived: boolean;
            pos: number;
            id?: number | undefined;
        }[];
        fetter: number;
        actived_constellation_num: number;
        icon?: string | undefined;
        costumes?: {
            name: string;
            id: number;
            icon: string;
        }[] | undefined;
        weapon?: {
            level: number;
            type: number;
            name: string;
            rarity: number;
            icon: string;
            type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
            promote_level: number;
            affix_level: number;
            desc?: string | undefined;
        } | undefined;
        reliquaries?: {
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
        }[] | undefined;
        external?: any;
    }, {
        level: number;
        image: string;
        name: string;
        element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
        rarity: number;
        constellations: {
            name: string;
            icon: string;
            effect: string;
            is_actived: boolean;
            pos: number;
            id?: number | undefined;
        }[];
        fetter: number;
        actived_constellation_num: number;
        icon?: string | undefined;
        costumes?: {
            name: string;
            id: number;
            icon: string;
        }[] | undefined;
        weapon?: {
            level: number;
            type: number;
            name: string;
            rarity: number;
            icon: string;
            type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
            promote_level: number;
            affix_level: number;
            desc?: string | undefined;
        } | undefined;
        reliquaries?: {
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
        }[] | undefined;
        external?: any;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    role: {
        AvatarUrl: string;
        nickname: string;
        region: string;
        level: number;
        game_head_icon: string;
    };
    avatars: {
        level: number;
        image: string;
        name: string;
        element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
        rarity: number;
        constellations: {
            name: string;
            icon: string;
            effect: string;
            is_actived: boolean;
            pos: number;
            id?: number | undefined;
        }[];
        fetter: number;
        actived_constellation_num: number;
        icon?: string | undefined;
        costumes?: {
            name: string;
            id: number;
            icon: string;
        }[] | undefined;
        weapon?: {
            level: number;
            type: number;
            name: string;
            rarity: number;
            icon: string;
            type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
            promote_level: number;
            affix_level: number;
            desc?: string | undefined;
        } | undefined;
        reliquaries?: {
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
        }[] | undefined;
        external?: any;
    }[];
}, {
    role: {
        AvatarUrl: string;
        nickname: string;
        region: string;
        level: number;
        game_head_icon: string;
    };
    avatars: {
        level: number;
        image: string;
        name: string;
        element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
        rarity: number;
        constellations: {
            name: string;
            icon: string;
            effect: string;
            is_actived: boolean;
            pos: number;
            id?: number | undefined;
        }[];
        fetter: number;
        actived_constellation_num: number;
        icon?: string | undefined;
        costumes?: {
            name: string;
            id: number;
            icon: string;
        }[] | undefined;
        weapon?: {
            level: number;
            type: number;
            name: string;
            rarity: number;
            icon: string;
            type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
            promote_level: number;
            affix_level: number;
            desc?: string | undefined;
        } | undefined;
        reliquaries?: {
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
        }[] | undefined;
        external?: any;
    }[];
}>;
export type GameData = z.infer<typeof GameData>;
