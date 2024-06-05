"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDataProvider = void 0;
const fs_1 = require("fs");
/**
 * Data provider that loads data from a file.
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
