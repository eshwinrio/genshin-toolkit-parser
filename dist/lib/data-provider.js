"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDataProvider = exports.BufferDataProvider = exports.StringDataProvider = void 0;
const fs_1 = require("fs");
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
/**
 * Data provider that loads data from a HAR file.
 */
class FileDataProvider {
    constructor(path) {
        this.path = path;
    }
    load() {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(this.path, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
exports.FileDataProvider = FileDataProvider;
