import { DataProvider } from '../lib/data-provider';

/**
 * Data provider that loads data from a File object using FileReader API.
 */
export class WebFileDataProvider implements DataProvider {
    constructor(private readonly file: File) { }

    load() {
        return new Promise<Buffer>((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result) {
                    const data = new Uint8Array(event.target.result as ArrayBuffer);
                    resolve(Buffer.from(data));
                } else {
                    reject(new Error("File reading failed"));
                }
            };

            reader.onerror = (event: ProgressEvent<FileReader>) => {
                reject(new Error("File reading failed"));
            };

            reader.readAsArrayBuffer(this.file);
        });
    }
}
