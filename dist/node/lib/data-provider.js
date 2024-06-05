"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BufferDataProvider = exports.StringDataProvider = void 0;
/**
 * Data provider that loads data from a serialized string object.
 */
class StringDataProvider {
    constructor(data) {
        this.data = data;
    }
    load() {
        return Promise.resolve(Buffer.from(this.data));
    }
}
exports.StringDataProvider = StringDataProvider;
/**
 * Data provider that loads data from a buffer.
 */
class BufferDataProvider {
    constructor(buffer) {
        this.buffer = buffer;
    }
    load() {
        return Promise.resolve(this.buffer);
    }
}
exports.BufferDataProvider = BufferDataProvider;
