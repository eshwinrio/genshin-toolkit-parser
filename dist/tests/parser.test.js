"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const node_test_1 = require("node:test");
const data_provider_1 = require("../lib/data-provider");
const parser_1 = require("../lib/parser");
const os_1 = require("os");
const path_1 = require("path");
const node_assert_1 = __importDefault(require("node:assert"));
(0, node_test_1.describe)("DataProvider tests for HAR", { concurrency: true, skip: !process.env.FS_PATH_TO_HAR }, (_suiteContext) => {
    let temporaryDirectory;
    (0, node_test_1.before)((_testContext) => __awaiter(void 0, void 0, void 0, function* () {
        process.env.NODE_ENV = "test";
        return new Promise((resolve, reject) => {
            (0, fs_1.mkdtemp)(`${(0, os_1.tmpdir)()}${path_1.sep}`, (err, folder) => {
                if (err)
                    reject(err);
                temporaryDirectory = folder;
                resolve(true);
            });
        });
    }));
    (0, node_test_1.after)((_testContext) => __awaiter(void 0, void 0, void 0, function* () {
        yield new Promise((resolve, reject) => {
            (0, fs_1.rm)(temporaryDirectory, { recursive: true, force: true }, (err) => {
                if (err)
                    reject(err);
                resolve(true);
            });
        });
    }));
    (0, node_test_1.it)("FileDataProvider", (_testContext) => __awaiter(void 0, void 0, void 0, function* () {
        const provider = new data_provider_1.FileDataProvider(process.env.FS_PATH_TO_HAR);
        const gameData = yield (0, parser_1.loadFromHar)(provider);
        node_assert_1.default.ok(gameData);
    }));
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
