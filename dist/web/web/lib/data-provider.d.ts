/// <reference types="node" />
import { DataProvider } from '../../lib/data-provider';
/**
 * Data provider that loads data from a File object using FileReader API.
 */
export declare class WebFileDataProvider implements DataProvider {
    private readonly file;
    constructor(file: File);
    load(): Promise<Buffer>;
}
