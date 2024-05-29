/// <reference types="node" />
import { GameData } from "./gamedata-schema";
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
export interface LoadFromHarOptions {
    readonly hoyolabApi?: string;
}
/**
 * Load game data from HAR file
 * @param source The data source of the HAR file
 */
export declare function loadFromHar(source: DataProvider): Promise<GameData>;
