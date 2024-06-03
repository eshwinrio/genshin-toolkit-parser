/// <reference types="node" />
/// <reference types="node" />
import { WriteFileOptions } from "fs";
export declare const GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api";
/**
 * Interface for data provider.
 */
export interface DataProvider {
    /**
     * Load data from provided source
     */
    load(): Promise<Buffer>;
}
/**
 * Data provider that loads data from a serialized string object.
 */
export declare class StringDataProvider implements DataProvider {
    private readonly data;
    constructor(data: string);
    load(): Promise<Buffer>;
}
/**
 * Data provider that loads data from a buffer.
 */
export declare class BufferDataProvider implements DataProvider {
    private readonly buffer;
    constructor(buffer: Buffer);
    load(): Promise<Buffer>;
}
/**
 * Data provider that loads data from a HAR file.
 */
export declare class FileDataProvider implements DataProvider {
    private readonly path;
    constructor(path: string);
    load(): Promise<Buffer>;
}
export declare class GameDataFactory {
    private _gamedata;
    private constructor();
    get gameData(): {
        role: {
            nickname: string;
            level: number;
            AvatarUrl?: string | undefined;
            region?: string | undefined;
            game_head_icon?: string | undefined;
        };
        avatars: {
            level: number;
            name: string;
            element: "Anemo" | "Cryo" | "Dendro" | "Electro" | "Geo" | "Hydro" | "Pyro";
            rarity: number;
            constellations: {
                name: string;
                effect: string;
                is_actived: boolean;
                pos: number;
                icon?: string | undefined;
            }[];
            fetter: number;
            actived_constellation_num: number;
            image?: string | undefined;
            icon?: string | undefined;
            costumes?: {
                name: string;
                icon?: string | undefined;
            }[] | undefined;
            weapon?: {
                level: number;
                type: number;
                name: string;
                rarity: number;
                type_name: "Claymore" | "Polearm" | "Sword" | "Bow" | "Catalyst";
                promote_level: number;
                affix_level: number;
                icon?: string | undefined;
                desc?: string | undefined;
            } | undefined;
            reliquaries?: {
                level: number;
                set: {
                    name: string;
                    affixes: {
                        effect: string;
                        activation_number: number;
                    }[];
                };
                name: string;
                rarity: number;
                pos: number;
                pos_name: string;
                icon?: string | undefined;
            }[] | undefined;
            external?: any;
        }[];
    };
    /**
     * Load game data from HAR file
     * @param source The data source of the HAR file
     */
    static loadFromHar(source: DataProvider): Promise<GameDataFactory>;
    /**
     * Load game data from file
     * @param source The data source of the file
     */
    static loadFromFile(source: DataProvider): Promise<GameDataFactory>;
    /**
     * Save game data to file
     * @param path The path to save the file to
     * @param options The options for writing the file
     */
    saveToFile(path: string, options?: WriteFileOptions): Promise<void>;
}
