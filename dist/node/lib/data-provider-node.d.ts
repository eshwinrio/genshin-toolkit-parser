/// <reference types="node" />
import { DataProvider } from "./data-provider";
/**
 * Data provider that loads data from a file.
 */
export declare class FileDataProvider implements DataProvider {
    private readonly path;
    constructor(path: string);
    load(): Promise<Buffer>;
}
