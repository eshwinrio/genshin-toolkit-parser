/// <reference types="node" />
import { GameData } from "./gamedata-schema";
export declare const GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api";
export interface DataProvider {
    load(): Promise<Buffer>;
}
export declare class BufferDataProvider implements DataProvider {
    private readonly buffer;
    constructor(buffer: Buffer);
    load(): Promise<Buffer>;
}
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
