globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/node-fetch-native/dist/polyfill.cjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, setHeader, getRequestURL, toWebRequest, getRequestIP, appendResponseHeader, getCookie, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/radix3/dist/index.mjs';
import _hEvg4IWjBS from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/vinxi/lib/app-fetch.js';
import _DH70YvFVQx from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/pathe/dist/index.mjs';
import { fromJSON, crossSerializeStream, getCrossReferenceHeader } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/seroval/dist/esm/production/index.mjs';
import { CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'file:///Users/aidan/Projects/solid-highlight/dev/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import { sharedConfig, lazy, createComponent as createComponent$1 } from 'file:///Users/aidan/Projects/solid-highlight/node_modules/.pnpm/solid-js@1.8.9/node_modules/solid-js/dist/server.js';
import { provideRequestEvent } from 'file:///Users/aidan/Projects/solid-highlight/node_modules/.pnpm/solid-js@1.8.9/node_modules/solid-js/web/dist/storage.js';
import { ssr, renderToStream, createComponent, ssrHydrationKey, NoHydration, escape, getRequestEvent, ssrAttribute, ssrElement, mergeProps } from 'file:///Users/aidan/Projects/solid-highlight/node_modules/.pnpm/solid-js@1.8.9/node_modules/solid-js/web/dist/server.js';

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/aidan/Projects/solid-highlight/dev/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/aidan/Projects/solid-highlight/dev/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/aidan/Projects/solid-highlight/dev","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/aidan/Projects/solid-highlight/dev","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/aidan/Projects/solid-highlight/dev/.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/aidan/Projects/solid-highlight/dev/.vinxi/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","mode":"static","dir":"./public","base":"/","root":"/Users/aidan/Projects/solid-highlight/dev","order":0,"outDir":"/Users/aidan/Projects/solid-highlight/dev/.vinxi/build/public"},{"name":"ssr","mode":"handler","handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/Users/aidan/Projects/solid-highlight/dev","base":"/","outDir":"/Users/aidan/Projects/solid-highlight/dev/.vinxi/build/ssr","order":1},{"name":"client","mode":"build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","base":"/_build","root":"/Users/aidan/Projects/solid-highlight/dev","outDir":"/Users/aidan/Projects/solid-highlight/dev/.vinxi/build/client","order":2},{"name":"server-fns","mode":"handler","base":"/_server","handler":"node_modules/@solidjs/start/config/server-handler.js","target":"server","root":"/Users/aidan/Projects/solid-highlight/dev","outDir":"/Users/aidan/Projects/solid-highlight/dev/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"preset":"cloudflare-pages","prerender":{}},"root":"/Users/aidan/Projects/solid-highlight/dev"};
				const buildManifest = {"ssr":{"virtual:#vinxi/handler/ssr":{"file":"ssr.js","isEntry":true,"src":"virtual:#vinxi/handler/ssr"}},"client":{"\u0000virtual:#vinxi/handler/client.css":{"file":"assets/client-077a2b3c.css","src":"\u0000virtual:#vinxi/handler/client.css"},"virtual:#vinxi/handler/client":{"css":["assets/client-077a2b3c.css"],"file":"assets/client-e2fe8486.js","isEntry":true,"src":"virtual:#vinxi/handler/client"}},"server-fns":{"virtual:#vinxi/handler/server-fns":{"file":"entry.js","isEntry":true,"src":"virtual:#vinxi/handler/server-fns"}}};

				const routeManifest = {"ssr":{},"client":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_hEvg4IWjBS,
_DH70YvFVQx,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const p = "Invariant Violation", { setPrototypeOf: z = function(e, t) {
  return e.__proto__ = t, e;
} } = Object;
class m extends Error {
  constructor(t = p) {
    super(typeof t == "number" ? `${p}: ${t} (see https://github.com/apollographql/invariant-packages)` : t);
    __publicField(this, "framesToPop", 1);
    __publicField(this, "name", p);
    z(this, m.prototype);
  }
}
function d(e, t) {
  if (!e)
    throw new m(t);
}
const x = Symbol("h3Event"), f$1 = Symbol("fetchEvent"), J = { get(e, t) {
  var _a;
  return t === f$1 ? e : (_a = e[t]) != null ? _a : e[x][t];
} };
function M(e) {
  return e.web || (e.web = { url: getRequestURL(e), request: toWebRequest(e) }), new Proxy({ request: e.web.request, clientAddress: getRequestIP(e), locals: {}, [x]: e }, J);
}
function W(e) {
  if (!e[f$1]) {
    const t = M(e);
    e[f$1] = t;
  }
  return e[f$1];
}
function _(e, t) {
  return new ReadableStream({ start(n) {
    crossSerializeStream(t, { scopeId: e, plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], onSerialize(s, i) {
      const o = i ? `(${getCrossReferenceHeader(e)},${s})` : s;
      n.enqueue(new TextEncoder().encode(`${o};
`));
    }, onDone() {
      n.close();
    }, onError(s) {
      n.error(s);
    } });
  } });
}
async function j(e) {
  d(e.method === "POST", `Invalid method ${e.method}. Expected POST.`);
  const t = W(e), n = t.request, s = n.headers.get("x-server-id"), i = n.headers.get("x-server-instance"), o = new URL(n.url);
  let c, u;
  if (s)
    d(typeof s == "string", "Invalid server function"), [c, u] = s.split("#");
  else if (c = o.searchParams.get("id"), u = o.searchParams.get("name"), !c || !u)
    throw new Error("Invalid request");
  const O = (await globalThis.MANIFEST["server-fns"].chunks[c].import())[u];
  let a = [];
  if (!i) {
    const r = o.searchParams.get("args");
    r && JSON.parse(r).forEach((l) => a.push(l));
  }
  const h = n.headers.get("content-type");
  h.startsWith("multipart/form-data") || h.startsWith("application/x-www-form-urlencoded") ? a.push(await n.formData()) : a = fromJSON(await n.json(), { plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin] });
  try {
    const r = await provideRequestEvent(t, () => (sharedConfig.context = { event: t }, O(...a)));
    if (!i) {
      const l = r instanceof Error, T = new URL(n.headers.get("referer"));
      return new Response(null, { status: 302, headers: { Location: T.toString(), ...r ? { "Set-Cookie": `flash=${JSON.stringify({ url: o.pathname + encodeURIComponent(o.search), result: l ? r.message : r, error: l, input: [...a.slice(0, -1), [...a[a.length - 1].entries()]] })}; Secure; HttpOnly;` } : {} } });
    }
    return typeof r == "string" ? new Response(r) : (setHeader(e, "content-type", "text/javascript"), _(i, r));
  } catch (r) {
    return r instanceof Response && r.status === 302 ? new Response(null, { status: i ? 204 : 302, headers: { Location: r.headers.get("Location") } }) : r;
  }
}
const Q$1 = eventHandler(j);

const C = [], D = G(C.filter((e) => e.type === "page")), K = Q(C.filter((e) => e.type === "api"));
function Y(e, s) {
  const t = e.split("/").filter(Boolean);
  e:
    for (const n of K) {
      const r = n.matchSegments;
      if (t.length < r.length || !n.wildcard && t.length > r.length)
        continue;
      for (let i = 0; i < r.length; i++) {
        const l = r[i];
        if (l && t[i] !== l)
          continue e;
      }
      const a = n[`$${s}`];
      if (a === "skip" || a === void 0)
        return;
      const o = {};
      for (const { type: i, name: l, index: c } of n.params)
        i === ":" ? o[l] = t[c] : o[l] = t.slice(c).join("/");
      return { handler: a, params: o };
    }
}
function G(e) {
  function s(t, n, r, a) {
    const o = Object.values(t).find((i) => r.startsWith(i.id + "/"));
    return o ? (s(o.children || (o.children = []), n, r.slice(o.id.length)), t) : (t.push({ ...n, id: r, path: r.replace(/\/\([^)/]+\)/g, "") }), t);
  }
  return e.sort((t, n) => t.path.length - n.path.length).reduce((t, n) => s(t, n, n.path, n.path), []);
}
function Q(e) {
  return e.flatMap((s) => T(s.path).map((n) => ({ ...s, path: n }))).map(V).sort((s, t) => t.score - s.score);
}
function T(e) {
  let s = /(\/?\:[^\/]+)\?/.exec(e);
  if (!s)
    return [e];
  let t = e.slice(0, s.index), n = e.slice(s.index + s[0].length);
  const r = [t, t += s[1]];
  for (; s = /^(\/\:[^\/]+)\?/.exec(n); )
    r.push(t += s[1]), n = n.slice(s[0].length);
  return T(n).reduce((a, o) => [...a, ...r.map((i) => i + o)], []);
}
function V(e) {
  const s = e.path.split("/").filter(Boolean), t = [], n = [];
  let r = 0, a = false;
  for (const [o, i] of s.entries())
    if (i[0] === ":") {
      const l = i.slice(1);
      r += 3, t.push({ type: ":", name: l, index: o }), n.push(null);
    } else
      i[0] === "*" ? (r -= 1, t.push({ type: "*", name: i.slice(1), index: o }), a = true) : (r += 4, i.match(/^\(.+\)$/) || n.push(i));
  return { ...e, score: r, params: t, matchSegments: n, wildcard: a };
}
const E = Symbol("h3Event"), f = Symbol("fetchEvent"), X = { get(e, s) {
  var _a;
  return s === f ? e : (_a = e[s]) != null ? _a : e[E][s];
} };
function Z(e) {
  return e.web || (e.web = { url: getRequestURL(e), request: toWebRequest(e) }), new Proxy({ request: e.web.request, clientAddress: getRequestIP(e), locals: {}, [E]: e }, X);
}
function ee(e) {
  if (!e[f]) {
    const s = Z(e);
    e[f] = s;
  }
  return e[f];
}
var te = " ";
const ne = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(te), true) : null };
function A(e) {
  let { tag: s, attrs: { key: t, ...n } = { key: void 0 }, children: r } = e;
  return ne[s]({ attrs: n, key: t, children: r });
}
function se(e, s, t, n = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[n], i = (await ((_a = s.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...i.map((u) => A(u)), createComponent$1(a, c)] };
    }
  });
}
function re() {
  function e(t) {
    return { ...t, ...t.$$route ? t.$$route.require().route : void 0, metadata: { ...t.$$route ? t.$$route.require().route.metadata : {}, filesystem: true }, component: se(t.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: t.children ? t.children.map(e) : void 0 };
  }
  return D.map(e);
}
function oe(e) {
  const s = getCookie(e, "flash");
  if (!s)
    return;
  let t = JSON.parse(s);
  if (!t || !t.result)
    return [];
  const n = [...t.input.slice(0, -1), new Map(t.input[t.input.length - 1])];
  return setCookie(e, "flash", "", { maxAge: 0 }), { url: t.url, result: t.error ? new Error(t.result) : t.result, input: n };
}
async function ae(e) {
  const s = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, setResponseHeader(e, "Content-Type", "text/html"), Object.assign(e, { manifest: await s.json(), assets: [...await s.inputs[s.handler].assets()], initialSubmission: oe(e), routes: re(), components: { status: (n) => (setResponseStatus(e, n.code, n.text), () => setResponseStatus(e, 200)), header: (n) => (n.append ? appendResponseHeader(e, n.name, n.value) : setResponseHeader(e, n.name, n.value), () => {
    const r = getResponseHeader(e, n.name);
    if (r && typeof r == "string") {
      const a = r.split(", "), o = a.indexOf(n.value);
      o !== -1 && a.splice(o, 1), a.length ? setResponseHeader(e, n.name, a.join(", ")) : removeResponseHeader(e, n.name);
    }
  }) }, $islands: /* @__PURE__ */ new Set() });
}
function ie(e, s = {}) {
  return eventHandler({ onRequest: s.onRequest, onBeforeResponse: s.onBeforeResponse, handler: (t) => {
    const n = ee(t);
    return provideRequestEvent(n, async () => {
      const r = Y(new URL(n.request.url).pathname, n.request.method);
      if (r) {
        const m = (await r.handler.import())[n.request.method];
        return n.params = r.params, sharedConfig.context = { event: n }, await m(n);
      }
      const a = await ae(n);
      let o = { ...s };
      if (o.onCompleteAll) {
        const u = o.onCompleteAll;
        o.onCompleteAll = (m) => {
          $(a)(m), u(m);
        };
      } else
        o.onCompleteAll = $(a);
      if (o.onCompleteShell) {
        const u = o.onCompleteShell;
        o.onCompleteShell = (m) => {
          v(a, t)(), u(m);
        };
      } else
        o.onCompleteShell = v(a, t);
      const i = renderToStream(() => (sharedConfig.context.event = a, e(a)), o);
      if (a.response && a.response.headers.get("Location"))
        return sendRedirect(n, a.response.headers.get("Location"));
      const { writable: l, readable: c } = new TransformStream();
      return i.pipeTo(l), c;
    });
  } });
}
function v(e, s) {
  return () => {
    e.response && e.response.headers.get("Location") && (setResponseStatus(s, 302), setHeader(s, "Location", e.response.headers.get("Location")));
  };
}
function $(e) {
  return ({ write: s }) => {
    const t = e.response && e.response.headers.get("Location");
    t && s(`<script>window.location="${t}"<\/script>`);
  };
}
var le = ["<script", ">", "<\/script>"], ce = ["<script", ' type="module"', "><\/script>"];
const ue = ssr("<!DOCTYPE html>");
function me(e) {
  const s = getRequestEvent();
  return createComponent(NoHydration, { get children() {
    return [ue, createComponent(e.document, { get assets() {
      return s.assets.map((t) => A(t));
    }, get scripts() {
      return [ssr(le, ssrHydrationKey(), `window.manifest = ${JSON.stringify(s.manifest)}`), ssr(ce, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
    } })];
  } });
}
var pe = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], de = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Re = ie(() => createComponent(me, { document: ({ assets: e, children: s, scripts: t }) => ssr(de, ssrHydrationKey(), createComponent(NoHydration, { get children() {
  return ssr(pe, escape(e));
} }), escape(s), escape(t)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: Q$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Re, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { localFetch };
//# sourceMappingURL=index.mjs.map
