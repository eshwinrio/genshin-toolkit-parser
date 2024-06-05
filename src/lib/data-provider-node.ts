import { readFile } from "fs";
import { DataProvider } from "./data-provider";

/**
 * Data provider that loads data from a file.
 */
export class FileDataProvider implements DataProvider {
    constructor(private readonly path: string) { }
    load() {
        return new Promise<Buffer>((resolve, reject) => {
            readFile(this.path, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
