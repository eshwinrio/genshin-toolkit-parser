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
export class StringDataProvider implements DataProvider {
    constructor(private readonly data: string) { }
    load() {
        return Promise.resolve(Buffer.from(this.data));
    }
}

/**
 * Data provider that loads data from a buffer.
 */
export class BufferDataProvider implements DataProvider {
    constructor(private readonly buffer: Buffer) { }
    load() {
        return Promise.resolve(this.buffer);
    }
}
