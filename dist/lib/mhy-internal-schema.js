"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MhyResponse = void 0;
const zod_1 = require("zod");
exports.MhyResponse = zod_1.z.object({
    retcode: zod_1.z.number(),
    message: zod_1.z.string(),
    message_cn: zod_1.z.string().optional(),
    message_en: zod_1.z.string().optional(),
    data: zod_1.z.any(),
});
