"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Costume = void 0;
const zod_1 = require("zod");
exports.Costume = zod_1.z.object({
    name: zod_1.z.string(),
    icon: zod_1.z.string().url().optional(),
});
