import { z } from "zod";
export declare const Element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
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
    type: number;
    level: number;
    name: string;
    rarity: number;
    icon: string;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    promote_level: number;
    affix_level: number;
    desc?: string | undefined;
}, {
    type: number;
    level: number;
    name: string;
    rarity: number;
    icon: string;
    type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
    promote_level: number;
    affix_level: number;
    desc?: string | undefined;
}>;
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
    name: string;
    rarity: number;
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    icon: string;
    pos: number;
    pos_name: string;
}, {
    name: string;
    rarity: number;
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
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
    name: string;
    rarity: number;
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    icon: string;
    pos: number;
    pos_name: string;
}, {
    level: number;
    name: string;
    rarity: number;
    set: {
        name: string;
        id: number;
        affixes: {
            effect: string;
            activation_number: number;
        }[];
    };
    icon: string;
    pos: number;
    pos_name: string;
}>;
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
export declare const CharacterBase: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
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
    costumes?: {
        name: string;
        id: number;
        icon: string;
    }[] | undefined;
}, {
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
    costumes?: {
        name: string;
        id: number;
        icon: string;
    }[] | undefined;
}>;
export declare const Character: z.ZodObject<z.objectUtil.extendShape<{
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
        type: number;
        level: number;
        name: string;
        rarity: number;
        icon: string;
        type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
        promote_level: number;
        affix_level: number;
        desc?: string | undefined;
    }, {
        type: number;
        level: number;
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
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
        icon: string;
        pos: number;
        pos_name: string;
    }, {
        level: number;
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
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
        type: number;
        level: number;
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
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
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
        type: number;
        level: number;
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
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
        icon: string;
        pos: number;
        pos_name: string;
    }[] | undefined;
    external?: any;
}>;
export declare const TravelerRole: z.ZodObject<{
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
export declare const MyCharacters: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        type: number;
        level: number;
        name: string;
        rarity: number;
        icon: string;
        type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
        promote_level: number;
        affix_level: number;
        desc?: string | undefined;
    }, {
        type: number;
        level: number;
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
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
        icon: string;
        pos: number;
        pos_name: string;
    }, {
        level: number;
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
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
        type: number;
        level: number;
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
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
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
        type: number;
        level: number;
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
        name: string;
        rarity: number;
        set: {
            name: string;
            id: number;
            affixes: {
                effect: string;
                activation_number: number;
            }[];
        };
        icon: string;
        pos: number;
        pos_name: string;
    }[] | undefined;
    external?: any;
}>, "many">;
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
            type: number;
            level: number;
            name: string;
            rarity: number;
            icon: string;
            type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
            promote_level: number;
            affix_level: number;
            desc?: string | undefined;
        }, {
            type: number;
            level: number;
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
            name: string;
            rarity: number;
            set: {
                name: string;
                id: number;
                affixes: {
                    effect: string;
                    activation_number: number;
                }[];
            };
            icon: string;
            pos: number;
            pos_name: string;
        }, {
            level: number;
            name: string;
            rarity: number;
            set: {
                name: string;
                id: number;
                affixes: {
                    effect: string;
                    activation_number: number;
                }[];
            };
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
            type: number;
            level: number;
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
            name: string;
            rarity: number;
            set: {
                name: string;
                id: number;
                affixes: {
                    effect: string;
                    activation_number: number;
                }[];
            };
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
            type: number;
            level: number;
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
            name: string;
            rarity: number;
            set: {
                name: string;
                id: number;
                affixes: {
                    effect: string;
                    activation_number: number;
                }[];
            };
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
            type: number;
            level: number;
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
            name: string;
            rarity: number;
            set: {
                name: string;
                id: number;
                affixes: {
                    effect: string;
                    activation_number: number;
                }[];
            };
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
            type: number;
            level: number;
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
            name: string;
            rarity: number;
            set: {
                name: string;
                id: number;
                affixes: {
                    effect: string;
                    activation_number: number;
                }[];
            };
            icon: string;
            pos: number;
            pos_name: string;
        }[] | undefined;
        external?: any;
    }[];
}>;
export type Element = z.infer<typeof Element>;
export type WeaponType = z.infer<typeof WeaponType>;
export type WeaponBase = z.infer<typeof WeaponBase>;
export type Weapon = z.infer<typeof Weapon>;
export type ReliquaryAffix = z.infer<typeof ReliquaryAffix>;
export type ReliquarySet = z.infer<typeof ReliquarySet>;
export type ReliquaryBase = z.infer<typeof ReliquaryBase>;
export type Reliquary = z.infer<typeof Reliquary>;
export type Constellation = z.infer<typeof Constellation>;
export type Costume = z.infer<typeof Costume>;
export type CharacterBase = z.infer<typeof CharacterBase>;
export type Character = z.infer<typeof Character>;
export type TravelerRole = z.infer<typeof TravelerRole>;
export type MyCharacters = z.infer<typeof MyCharacters>;
export type GameData = z.infer<typeof GameData>;
