import { z } from "zod";
export declare const HeaderSchema: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string;
}, {
    value: string;
    name: string;
}>;
export declare const CookieSchema: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string;
}, {
    value: string;
    name: string;
}>;
export declare const QueryStringSchema: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string;
}, {
    value: string;
    name: string;
}>;
export declare const CreatorSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    version?: string | undefined;
}, {
    name?: string | undefined;
    version?: string | undefined;
}>;
export declare const BrowserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    version?: string | undefined;
}, {
    name?: string | undefined;
    version?: string | undefined;
}>;
export declare const PageTimingsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const PageSchema: z.ZodObject<{
    startedDateTime: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    pageTimings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    startedDateTime?: string | undefined;
    title?: string | undefined;
    pageTimings?: {} | undefined;
}, {
    id?: string | undefined;
    startedDateTime?: string | undefined;
    title?: string | undefined;
    pageTimings?: {} | undefined;
}>;
export declare const RequestSchema: z.ZodObject<{
    method: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    httpVersion: z.ZodOptional<z.ZodString>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    queryString: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    cookies: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    headersSize: z.ZodOptional<z.ZodNumber>;
    bodySize: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    method?: string | undefined;
    url?: string | undefined;
    httpVersion?: string | undefined;
    headers?: {
        value: string;
        name: string;
    }[] | undefined;
    queryString?: {
        value: string;
        name: string;
    }[] | undefined;
    cookies?: {
        value: string;
        name: string;
    }[] | undefined;
    headersSize?: number | undefined;
    bodySize?: number | undefined;
}, {
    method?: string | undefined;
    url?: string | undefined;
    httpVersion?: string | undefined;
    headers?: {
        value: string;
        name: string;
    }[] | undefined;
    queryString?: {
        value: string;
        name: string;
    }[] | undefined;
    cookies?: {
        value: string;
        name: string;
    }[] | undefined;
    headersSize?: number | undefined;
    bodySize?: number | undefined;
}>;
export declare const ResponseSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodNumber>;
    statusText: z.ZodOptional<z.ZodString>;
    httpVersion: z.ZodOptional<z.ZodString>;
    headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    cookies: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    content: z.ZodOptional<z.ZodObject<{
        size: z.ZodNumber;
        mimeType: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        encoding: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        size: number;
        mimeType?: string | undefined;
        text?: string | undefined;
        encoding?: string | undefined;
    }, {
        size: number;
        mimeType?: string | undefined;
        text?: string | undefined;
        encoding?: string | undefined;
    }>>;
    redirectURL: z.ZodOptional<z.ZodString>;
    headersSize: z.ZodOptional<z.ZodNumber>;
    bodySize: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    status?: number | undefined;
    httpVersion?: string | undefined;
    headers?: {
        value: string;
        name: string;
    }[] | undefined;
    cookies?: {
        value: string;
        name: string;
    }[] | undefined;
    headersSize?: number | undefined;
    bodySize?: number | undefined;
    statusText?: string | undefined;
    content?: {
        size: number;
        mimeType?: string | undefined;
        text?: string | undefined;
        encoding?: string | undefined;
    } | undefined;
    redirectURL?: string | undefined;
}, {
    status?: number | undefined;
    httpVersion?: string | undefined;
    headers?: {
        value: string;
        name: string;
    }[] | undefined;
    cookies?: {
        value: string;
        name: string;
    }[] | undefined;
    headersSize?: number | undefined;
    bodySize?: number | undefined;
    statusText?: string | undefined;
    content?: {
        size: number;
        mimeType?: string | undefined;
        text?: string | undefined;
        encoding?: string | undefined;
    } | undefined;
    redirectURL?: string | undefined;
}>;
export declare const HarEntry: z.ZodObject<{
    startedDateTime: z.ZodOptional<z.ZodString>;
    time: z.ZodOptional<z.ZodNumber>;
    request: z.ZodOptional<z.ZodObject<{
        method: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        httpVersion: z.ZodOptional<z.ZodString>;
        headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        queryString: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        cookies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        headersSize: z.ZodOptional<z.ZodNumber>;
        bodySize: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        method?: string | undefined;
        url?: string | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        queryString?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
    }, {
        method?: string | undefined;
        url?: string | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        queryString?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
    }>>;
    response: z.ZodOptional<z.ZodObject<{
        status: z.ZodOptional<z.ZodNumber>;
        statusText: z.ZodOptional<z.ZodString>;
        httpVersion: z.ZodOptional<z.ZodString>;
        headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        cookies: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        content: z.ZodOptional<z.ZodObject<{
            size: z.ZodNumber;
            mimeType: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            encoding: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            size: number;
            mimeType?: string | undefined;
            text?: string | undefined;
            encoding?: string | undefined;
        }, {
            size: number;
            mimeType?: string | undefined;
            text?: string | undefined;
            encoding?: string | undefined;
        }>>;
        redirectURL: z.ZodOptional<z.ZodString>;
        headersSize: z.ZodOptional<z.ZodNumber>;
        bodySize: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status?: number | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
        statusText?: string | undefined;
        content?: {
            size: number;
            mimeType?: string | undefined;
            text?: string | undefined;
            encoding?: string | undefined;
        } | undefined;
        redirectURL?: string | undefined;
    }, {
        status?: number | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
        statusText?: string | undefined;
        content?: {
            size: number;
            mimeType?: string | undefined;
            text?: string | undefined;
            encoding?: string | undefined;
        } | undefined;
        redirectURL?: string | undefined;
    }>>;
    cache: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    timings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    serverIPAddress: z.ZodOptional<z.ZodString>;
    connection: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    startedDateTime?: string | undefined;
    time?: number | undefined;
    request?: {
        method?: string | undefined;
        url?: string | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        queryString?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
    } | undefined;
    response?: {
        status?: number | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
        statusText?: string | undefined;
        content?: {
            size: number;
            mimeType?: string | undefined;
            text?: string | undefined;
            encoding?: string | undefined;
        } | undefined;
        redirectURL?: string | undefined;
    } | undefined;
    cache?: {} | undefined;
    timings?: {} | undefined;
    serverIPAddress?: string | undefined;
    connection?: string | undefined;
}, {
    startedDateTime?: string | undefined;
    time?: number | undefined;
    request?: {
        method?: string | undefined;
        url?: string | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        queryString?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
    } | undefined;
    response?: {
        status?: number | undefined;
        httpVersion?: string | undefined;
        headers?: {
            value: string;
            name: string;
        }[] | undefined;
        cookies?: {
            value: string;
            name: string;
        }[] | undefined;
        headersSize?: number | undefined;
        bodySize?: number | undefined;
        statusText?: string | undefined;
        content?: {
            size: number;
            mimeType?: string | undefined;
            text?: string | undefined;
            encoding?: string | undefined;
        } | undefined;
        redirectURL?: string | undefined;
    } | undefined;
    cache?: {} | undefined;
    timings?: {} | undefined;
    serverIPAddress?: string | undefined;
    connection?: string | undefined;
}>;
export declare const HAR: z.ZodObject<{
    log: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        creator: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            version?: string | undefined;
        }, {
            name?: string | undefined;
            version?: string | undefined;
        }>>;
        browser: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            version?: string | undefined;
        }, {
            name?: string | undefined;
            version?: string | undefined;
        }>>;
        pages: z.ZodOptional<z.ZodArray<z.ZodObject<{
            startedDateTime: z.ZodOptional<z.ZodString>;
            id: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
            pageTimings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            startedDateTime?: string | undefined;
            title?: string | undefined;
            pageTimings?: {} | undefined;
        }, {
            id?: string | undefined;
            startedDateTime?: string | undefined;
            title?: string | undefined;
            pageTimings?: {} | undefined;
        }>, "many">>;
        entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            startedDateTime: z.ZodOptional<z.ZodString>;
            time: z.ZodOptional<z.ZodNumber>;
            request: z.ZodOptional<z.ZodObject<{
                method: z.ZodOptional<z.ZodString>;
                url: z.ZodOptional<z.ZodString>;
                httpVersion: z.ZodOptional<z.ZodString>;
                headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                queryString: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                cookies: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                headersSize: z.ZodOptional<z.ZodNumber>;
                bodySize: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            }, {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            }>>;
            response: z.ZodOptional<z.ZodObject<{
                status: z.ZodOptional<z.ZodNumber>;
                statusText: z.ZodOptional<z.ZodString>;
                httpVersion: z.ZodOptional<z.ZodString>;
                headers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                cookies: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                content: z.ZodOptional<z.ZodObject<{
                    size: z.ZodNumber;
                    mimeType: z.ZodOptional<z.ZodString>;
                    text: z.ZodOptional<z.ZodString>;
                    encoding: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                }, {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                }>>;
                redirectURL: z.ZodOptional<z.ZodString>;
                headersSize: z.ZodOptional<z.ZodNumber>;
                bodySize: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            }, {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            }>>;
            cache: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            timings: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            serverIPAddress: z.ZodOptional<z.ZodString>;
            connection: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            startedDateTime?: string | undefined;
            time?: number | undefined;
            request?: {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            } | undefined;
            response?: {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            } | undefined;
            cache?: {} | undefined;
            timings?: {} | undefined;
            serverIPAddress?: string | undefined;
            connection?: string | undefined;
        }, {
            startedDateTime?: string | undefined;
            time?: number | undefined;
            request?: {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            } | undefined;
            response?: {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            } | undefined;
            cache?: {} | undefined;
            timings?: {} | undefined;
            serverIPAddress?: string | undefined;
            connection?: string | undefined;
        }>, "many">>;
        comment: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        entries?: {
            startedDateTime?: string | undefined;
            time?: number | undefined;
            request?: {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            } | undefined;
            response?: {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            } | undefined;
            cache?: {} | undefined;
            timings?: {} | undefined;
            serverIPAddress?: string | undefined;
            connection?: string | undefined;
        }[] | undefined;
        version?: string | undefined;
        creator?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        browser?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        pages?: {
            id?: string | undefined;
            startedDateTime?: string | undefined;
            title?: string | undefined;
            pageTimings?: {} | undefined;
        }[] | undefined;
        comment?: string | undefined;
    }, {
        entries?: {
            startedDateTime?: string | undefined;
            time?: number | undefined;
            request?: {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            } | undefined;
            response?: {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            } | undefined;
            cache?: {} | undefined;
            timings?: {} | undefined;
            serverIPAddress?: string | undefined;
            connection?: string | undefined;
        }[] | undefined;
        version?: string | undefined;
        creator?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        browser?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        pages?: {
            id?: string | undefined;
            startedDateTime?: string | undefined;
            title?: string | undefined;
            pageTimings?: {} | undefined;
        }[] | undefined;
        comment?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    log?: {
        entries?: {
            startedDateTime?: string | undefined;
            time?: number | undefined;
            request?: {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            } | undefined;
            response?: {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            } | undefined;
            cache?: {} | undefined;
            timings?: {} | undefined;
            serverIPAddress?: string | undefined;
            connection?: string | undefined;
        }[] | undefined;
        version?: string | undefined;
        creator?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        browser?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        pages?: {
            id?: string | undefined;
            startedDateTime?: string | undefined;
            title?: string | undefined;
            pageTimings?: {} | undefined;
        }[] | undefined;
        comment?: string | undefined;
    } | undefined;
}, {
    log?: {
        entries?: {
            startedDateTime?: string | undefined;
            time?: number | undefined;
            request?: {
                method?: string | undefined;
                url?: string | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                queryString?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
            } | undefined;
            response?: {
                status?: number | undefined;
                httpVersion?: string | undefined;
                headers?: {
                    value: string;
                    name: string;
                }[] | undefined;
                cookies?: {
                    value: string;
                    name: string;
                }[] | undefined;
                headersSize?: number | undefined;
                bodySize?: number | undefined;
                statusText?: string | undefined;
                content?: {
                    size: number;
                    mimeType?: string | undefined;
                    text?: string | undefined;
                    encoding?: string | undefined;
                } | undefined;
                redirectURL?: string | undefined;
            } | undefined;
            cache?: {} | undefined;
            timings?: {} | undefined;
            serverIPAddress?: string | undefined;
            connection?: string | undefined;
        }[] | undefined;
        version?: string | undefined;
        creator?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        browser?: {
            name?: string | undefined;
            version?: string | undefined;
        } | undefined;
        pages?: {
            id?: string | undefined;
            startedDateTime?: string | undefined;
            title?: string | undefined;
            pageTimings?: {} | undefined;
        }[] | undefined;
        comment?: string | undefined;
    } | undefined;
}>;
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
