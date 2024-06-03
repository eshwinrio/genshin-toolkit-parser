import { readFile } from "fs";
import test, { describe } from "node:test";
import { BufferDataProvider, FileDataProvider, GameDataFactory } from "../lib/parser";

describe(
    "DataProvider tests for HAR",
    { concurrency: true, skip: !process.env.FS_PATH_TO_HAR },
    (_suiteContext) => {

        test("FileDataProvider", async (_testContext) => {
            const provider = new FileDataProvider(process.env.FS_PATH_TO_HAR!);
            const gameDataFactory = await GameDataFactory.loadFromHar(provider);
            console.table(gameDataFactory.gameData.avatars.map(avatar => ({
                character: avatar.name,
                level: avatar.level,
                weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
                friendship: `lv${avatar.fetter}`
            })));
        });

        test("BufferDataProvider", (_testContext) => {
            readFile(process.env.FS_PATH_TO_HAR!, (err, data) => {
                if (err) {
                    throw err;
                }
                const provider = new BufferDataProvider(data);
                GameDataFactory.loadFromHar(provider).then(gameDataFactory => {
                    console.table(gameDataFactory.gameData.avatars.map(avatar => ({
                        character: avatar.name,
                        level: avatar.level,
                        weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
                        friendship: `lv${avatar.fetter}`
                    })));
                });
            });
        });
    }
)
