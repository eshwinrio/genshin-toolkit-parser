"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HAR = exports.HarEntry = exports.ResponseSchema = exports.RequestSchema = exports.PageSchema = exports.PageTimingsSchema = exports.BrowserSchema = exports.CreatorSchema = exports.QueryStringSchema = exports.CookieSchema = exports.HeaderSchema = void 0;
const zod_1 = require("zod");
exports.HeaderSchema = zod_1.z.object({
    name: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.CookieSchema = zod_1.z.object({
    name: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.QueryStringSchema = zod_1.z.object({
    name: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.CreatorSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    version: zod_1.z.string().optional(),
});
exports.BrowserSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    version: zod_1.z.string().optional(),
});
exports.PageTimingsSchema = zod_1.z.object({});
exports.PageSchema = zod_1.z.object({
    startedDateTime: zod_1.z.string().optional(),
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    pageTimings: exports.PageTimingsSchema.optional(),
});
exports.RequestSchema = zod_1.z.object({
    method: zod_1.z.string().optional(),
    url: zod_1.z.string().optional(),
    httpVersion: zod_1.z.string().optional(),
    headers: zod_1.z.array(exports.HeaderSchema).optional(),
    queryString: zod_1.z.array(exports.QueryStringSchema).optional(),
    cookies: zod_1.z.array(exports.CookieSchema).optional(),
    headersSize: zod_1.z.number().optional(),
    bodySize: zod_1.z.number().optional(),
});
exports.ResponseSchema = zod_1.z.object({
    status: zod_1.z.number().optional(),
    statusText: zod_1.z.string().optional(),
    httpVersion: zod_1.z.string().optional(),
    headers: zod_1.z.array(exports.HeaderSchema).optional(),
    cookies: zod_1.z.array(exports.CookieSchema).optional(),
    content: zod_1.z.object({
        size: zod_1.z.number(),
        mimeType: zod_1.z.string().optional(),
        text: zod_1.z.string().optional(),
        encoding: zod_1.z.string().optional(),
    }).optional(),
    redirectURL: zod_1.z.string().optional(),
    headersSize: zod_1.z.number().optional(),
    bodySize: zod_1.z.number().optional(),
});
exports.HarEntry = zod_1.z.object({
    startedDateTime: zod_1.z.string().optional(),
    time: zod_1.z.number().optional(),
    request: exports.RequestSchema.optional(),
    response: exports.ResponseSchema.optional(),
    cache: zod_1.z.object({}).optional(),
    timings: zod_1.z.object({}).optional(),
    serverIPAddress: zod_1.z.string().optional(),
    connection: zod_1.z.string().optional(),
});
exports.HAR = zod_1.z.object({
    log: zod_1.z.object({
        version: zod_1.z.string().optional(),
        creator: exports.CreatorSchema.optional(),
        browser: exports.BrowserSchema.optional(),
        pages: zod_1.z.array(exports.PageSchema).optional(),
        entries: zod_1.z.array(exports.HarEntry).optional(),
        comment: zod_1.z.string().optional(),
    }).optional(),
});
