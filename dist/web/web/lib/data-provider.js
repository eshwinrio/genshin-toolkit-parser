"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebFileDataProvider = void 0;
/**
 * Data provider that loads data from a File object using FileReader API.
 */
class WebFileDataProvider {
    constructor(file) {
        this.file = file;
    }
    load() {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && event.target.result) {
                    const data = new Uint8Array(event.target.result);
                    resolve(Buffer.from(data));
                }
                else {
                    reject(new Error("File reading failed"));
                }
            };
            reader.onerror = (event) => {
                reject(new Error("File reading failed"));
            };
            reader.readAsArrayBuffer(this.file);
        });
    }
}
exports.WebFileDataProvider = WebFileDataProvider;
