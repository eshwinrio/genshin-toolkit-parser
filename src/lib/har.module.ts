import { z } from "zod";

export const NameValueSchema = z.object({
  name: z.string(),
  value: z.string(),
});
export const HeaderSchema = NameValueSchema
export const CookieSchema = NameValueSchema;
export const QueryStringSchema = NameValueSchema;

export const NameVersionSchema = z.object({
  name: z.string(),
  version: z.string(),
});
export const CreatorSchema = NameVersionSchema;
export const BrowserSchema = NameVersionSchema;

export const PageTimingsSchema = z.object({});

export const PageSchema = z.object({
  startedDateTime: z.string().optional(),
  id: z.string().optional(),
  title: z.string().optional(),
  pageTimings: PageTimingsSchema.optional(),
});

export const RequestSchema = z.object({
  method: z.string().optional(),
  url: z.string().optional(),
  httpVersion: z.string().optional(),
  headers: z.array(HeaderSchema).optional(),
  queryString: z.array(QueryStringSchema).optional(),
  cookies: z.array(CookieSchema).optional(),
  headersSize: z.number().optional(),
  bodySize: z.number().optional(),
});

export const ResponseSchema = z.object({
  status: z.number().optional(),
  statusText: z.string().optional(),
  httpVersion: z.string().optional(),
  headers: z.array(HeaderSchema).optional(),
  cookies: z.array(CookieSchema).optional(),
  content: z.object({
    size: z.number(),
    mimeType: z.string().optional(),
    text: z.string().optional(),
    encoding: z.string().optional(),
  }).optional(),
  redirectURL: z.string().optional(),
  headersSize: z.number().optional(),
  bodySize: z.number().optional(),
});

export const HarEntry = z.object({
  startedDateTime: z.string().optional(),
  time: z.number().optional(),
  request: RequestSchema.optional(),
  response: ResponseSchema.optional(),
  cache: z.object({}).optional(),
  timings: z.object({}).optional(),
  serverIPAddress: z.string().optional(),
  connection: z.string().optional(),
});

export const HAR = z.object({
  log: z.object({
    version: z.string().optional(),
    creator: CreatorSchema.optional(),
    browser: BrowserSchema.optional(),
    pages: z.array(PageSchema).optional(),
    entries: z.array(HarEntry).optional(),
    comment: z.string().optional(),
  }).optional(),
});


export type KeyValueSchema = z.infer<typeof NameValueSchema>;
export type HeaderSchema = z.infer<typeof HeaderSchema>;
export type CookieSchema = z.infer<typeof CookieSchema>;
export type QueryStringSchema = z.infer<typeof QueryStringSchema>;
export type PageTimingsSchema = z.infer<typeof PageTimingsSchema>;
export type PageSchema = z.infer<typeof PageSchema>;
export type CreatorSchema = z.infer<typeof CreatorSchema>;
export type BrowserSchema = z.infer<typeof BrowserSchema>;
export type RequestSchema = z.infer<typeof RequestSchema>;
export type ResponseSchema = z.infer<typeof ResponseSchema>;
export type HarEntry = z.infer<typeof HarEntry>;
export type HAR = z.infer<typeof HAR>;
