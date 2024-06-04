import { readFile, mkdtemp, rm } from "fs";
import { after, before, describe, it } from "node:test";
import { BufferDataProvider, FileDataProvider, GameDataFactory } from "../lib/parser";
import { tmpdir } from "os";
import { sep } from "path";
import assert from "node:assert";

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
            const gameDataFactory = await GameDataFactory.loadFromHar(provider);
            assert.ok(gameDataFactory.gameData);
        });

        it("BufferDataProvider", (_testContext) => {
            return new Promise((resolve, reject) => {
                readFile(process.env.FS_PATH_TO_HAR!, (err, data) => {
                    if (err) reject(err);
                    const provider = new BufferDataProvider(data);
                    GameDataFactory.loadFromHar(provider).then(gameDataFactory => {
                        assert.ok(gameDataFactory.gameData);
                        resolve();
                    });
                });
            });
        });

        it("File output", async (_testContext) => {
            const provider = new FileDataProvider(process.env.FS_PATH_TO_HAR!);
            const gameDataFactory = await GameDataFactory.loadFromHar(provider);
            await gameDataFactory.saveToFile(temporaryDirectory + "output.json");
            const provider2 = new FileDataProvider(temporaryDirectory + "output.json");
            const gameDataFactory2 = await GameDataFactory.loadFromFile(provider2);
            assert.ok(gameDataFactory2.gameData);
        });
    }
)
