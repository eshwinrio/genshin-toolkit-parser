import { readFile } from "fs";
import test, { describe } from "node:test";
import { BufferDataProvider, FileDataProvider, loadFromHar } from "../lib/parser";

describe(
    "DataProvider tests for HAR",
    { concurrency: true, skip: !process.env.FS_PATH_TO_HAR },
    (_suiteContext) => {
        
        test("FileDataProvider", (_testContext) => {
            const provider = new FileDataProvider(process.env.FS_PATH_TO_HAR!);
            loadFromHar(provider).then(data => {
                console.table(data.avatars.map(avatar => ({
                    character: avatar.name,
                    level: avatar.level,
                    weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
                    friendship: `lv${avatar.fetter}`
                })));
            });
        });

        test("BufferDataProvider", (_testContext) => {
            readFile(process.env.FS_PATH_TO_HAR!, (err, data) => {
                if (err) {
                    throw err;
                }
                const bufferDataProvider = new BufferDataProvider(data);
                loadFromHar(bufferDataProvider).then(data => {
                    console.table(data.avatars.map(avatar => ({
                        character: avatar.name,
                        level: avatar.level,
                        weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
                        friendship: `lv${avatar.fetter}`
                    })));
                })
            });
        });
    }
);
