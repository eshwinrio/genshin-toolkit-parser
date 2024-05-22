import { z } from "zod";


export const RequestSchema = z.object({
  method: z.string().optional(),
  url: z.string().optional(),
  httpVersion: z.string().optional(),
  headers: z.array(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
  queryString: z.array(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
  cookies: z.array(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
  headersSize: z.number().optional(),
  bodySize: z.number().optional(),
});

export const ResponseSchema = z.object({
  status: z.number().optional(),
  statusText: z.string().optional(),
  httpVersion: z.string().optional(),
  headers: z.array(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
  cookies: z.array(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
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
    creator: z.object({
      name: z.string().optional(),
      version: z.string().optional(),
    }).optional(),
    browser: z.object({
      name: z.string().optional(),
      version: z.string().optional(),
    }).optional(),
    pages: z.array(z.object({
      startedDateTime: z.string().optional(),
      id: z.string().optional(),
      title: z.string().optional(),
      pageTimings: z.object({}).optional(),
    })).optional(),
    entries: z.array(HarEntry).optional(),
    comment: z.string().optional(),
  }).optional(),
});

export type RequestSchema = z.infer<typeof RequestSchema>;
export type ResponseSchema = z.infer<typeof ResponseSchema>;
export type HarEntry = z.infer<typeof HarEntry>;
export type HAR = z.infer<typeof HAR>;
