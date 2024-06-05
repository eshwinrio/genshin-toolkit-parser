"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const node_assert_1 = __importDefault(require("node:assert"));
const node_test_1 = require("node:test");
const os_1 = require("os");
const path_1 = require("path");
const data_provider_1 = require("../lib/data-provider");
const parser_1 = require("../lib/parser");
const data_provider_node_1 = require("../lib/data-provider-node");
(0, node_test_1.describe)("DataProvider tests for HAR", { concurrency: true, skip: !process.env.FS_PATH_TO_HAR }, (_suiteContext) => {
    let temporaryDirectory;
    (0, node_test_1.before)(async (_testContext) => {
        process.env.NODE_ENV = "test";
        return new Promise((resolve, reject) => {
            (0, fs_1.mkdtemp)(`${(0, os_1.tmpdir)()}${path_1.sep}`, (err, folder) => {
                if (err)
                    reject(err);
                temporaryDirectory = folder;
                resolve(true);
            });
        });
    });
    (0, node_test_1.after)(async (_testContext) => {
        await new Promise((resolve, reject) => {
            (0, fs_1.rm)(temporaryDirectory, { recursive: true, force: true }, (err) => {
                if (err)
                    reject(err);
                resolve(true);
            });
        });
    });
    (0, node_test_1.it)("FileDataProvider", async (_testContext) => {
        const provider = new data_provider_node_1.FileDataProvider(process.env.FS_PATH_TO_HAR);
        const gameData = await (0, parser_1.loadFromHar)(provider);
        node_assert_1.default.ok(gameData);
    });
    (0, node_test_1.it)("BufferDataProvider", (_testContext) => {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(process.env.FS_PATH_TO_HAR, (err, data) => {
                if (err)
                    reject(err);
                const provider = new data_provider_1.BufferDataProvider(data);
                (0, parser_1.loadFromHar)(provider).then(gameData => {
                    node_assert_1.default.ok(gameData);
                    resolve();
                });
            });
        });
    });
});
