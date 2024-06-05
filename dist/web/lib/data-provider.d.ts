/// <reference types="node" />
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
