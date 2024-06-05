import { mkdtemp, readFile, rm } from "fs";
import assert from "node:assert";
import { after, before, describe, it } from "node:test";
import { tmpdir } from "os";
import { sep } from "path";
import { BufferDataProvider } from "../lib/data-provider";
import { loadFromHar } from "../lib/parser";
import { FileDataProvider } from "lib/data-provider-node";

describe(
    "DataProvider tests for HAR",
    { concurrency: true, skip: !process.env.FS_PATH_TO_HAR },
    (_suiteContext) => {

        let temporaryDirectory: string;

        before(async (_testContext) => {
            process.env.NODE_ENV = "test";
            return new Promise((resolve, reject) => {
                mkdtemp(`${tmpdir()}${sep}`, (err, folder) => {
                    if (err) reject(err);
                    temporaryDirectory = folder;
                    resolve(true);
                });
            })
        });

        after(async (_testContext) => {
            await new Promise((resolve, reject) => {
                rm(temporaryDirectory, { recursive: true, force: true }, (err) => {
                    if (err) reject(err);
                    resolve(true);
                });
            });
        });

        it("FileDataProvider", async (_testContext) => {
            const provider = new FileDataProvider(process.env.FS_PATH_TO_HAR!);
            const gameData = await loadFromHar(provider);
            assert.ok(gameData);
        });

        it("BufferDataProvider", (_testContext) => {
            return new Promise((resolve, reject) => {
                readFile(process.env.FS_PATH_TO_HAR!, (err, data) => {
                    if (err) reject(err);
                    const provider = new BufferDataProvider(data);
                    loadFromHar(provider).then(gameData => {
                        assert.ok(gameData);
                        resolve();
                    });
                });
            });
        });
    }
)
