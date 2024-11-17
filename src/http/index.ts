/**
 * @typedef {string} HTTPMethod
 * @description Common HTTP methods.
 * @enum {HTTPMethod}
 */
export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "CONNECT" | "OPTIONS" | "TRACE";

/**
 * Represents the GET HTTP method.
 * @type {HTTPMethod}
 */
export const Get: HTTPMethod = "GET";

/**
 * Represents the HEAD HTTP method.
 * @type {HTTPMethod}
 */
export const Head: HTTPMethod = "HEAD";

/**
 * Represents the POST HTTP method.
 * @type {HTTPMethod}
 */
export const Post: HTTPMethod = "POST";

/**
 * Represents the PUT HTTP method.
 * @type {HTTPMethod}
 */
export const Put: HTTPMethod = "PUT";

/**
 * Represents the PATCH HTTP method.
 * @type {HTTPMethod}
 */
export const Patch: HTTPMethod = "PATCH";

/**
 * Represents the DELETE HTTP method.
 * @type {HTTPMethod}
 */
export const Delete: HTTPMethod = "DELETE";

/**
 * Represents the CONNECT HTTP method.
 * @type {HTTPMethod}
 */
export const Connect: HTTPMethod = "CONNECT";

/**
 * Represents the OPTIONS HTTP method.
 * @type {HTTPMethod}
 */
export const Options: HTTPMethod = "OPTIONS";

/**
 * Represents the TRACE HTTP method.
 * @type {HTTPMethod}
 */
export const Trace: HTTPMethod = "TRACE";

/**
 * Common HTTP methods.
 * @type {Object}
 * @property {HTTPMethod} Get - The GET HTTP method.
 * @property {HTTPMethod} Head - The HEAD HTTP method.
 * @property {HTTPMethod} Post - The POST HTTP method.
 * @property {HTTPMethod} Put - The PUT HTTP method.
 * @property {HTTPMethod} Patch - The PATCH HTTP method.
 * @property {HTTPMethod} Delete - The DELETE HTTP method.
 * @property {HTTPMethod} Connect - The CONNECT HTTP method.
 * @property {HTTPMethod} Options - The OPTIONS HTTP method.
 * @property {HTTPMethod} Trace - The TRACE HTTP method.
 */
export const HTTPMethods = {
  Get,
  Head,
  Post,
  Put,
  Patch,
  Delete,
  Connect,
  Options,
  Trace,
};

/**
 * Represents an HTTP status code.
 * @type {number}
 */
export type HTTPStatusCode = number;

/**
 * Status code for Continue (100).
 * @type {HTTPStatusCode}
 */
export const StatusContinue: HTTPStatusCode = 100;

/**
 * Status code for Switching Protocols (101).
 * @type {HTTPStatusCode}
 */
export const StatusSwitchingProtocols: HTTPStatusCode = 101;

/**
 * Status code for Processing (102).
 * @type {HTTPStatusCode}
 */
export const StatusProcessing: HTTPStatusCode = 102;

/**
 * Status code for Early Hints (103).
 * @type {HTTPStatusCode}
 */
export const StatusEarlyHints: HTTPStatusCode = 103;

/**
 * Status code for OK (200).
 * @type {HTTPStatusCode}
 */
export const StatusOK: HTTPStatusCode = 200;

/**
 * Status code for Created (201).
 * @type {HTTPStatusCode}
 */
export const StatusCreated: HTTPStatusCode = 201;

/**
 * Status code for Accepted (202).
 * @type {HTTPStatusCode}
 */
export const StatusAccepted: HTTPStatusCode = 202;

/**
 * Status code for Non-Authoritative Information (203).
 * @type {HTTPStatusCode}
 */
export const StatusNonAuthoritativeInfo: HTTPStatusCode = 203;

/**
 * Status code for No Content (204).
 * @type {HTTPStatusCode}
 */
export const StatusNoContent: HTTPStatusCode = 204;

/**
 * Status code for Reset Content (205).
 * @type {HTTPStatusCode}
 */
export const StatusResetContent: HTTPStatusCode = 205;

/**
 * Status code for Partial Content (206).
 * @type {HTTPStatusCode}
 */
export const StatusPartialContent: HTTPStatusCode = 206;

/**
 * Status code for Multi-Status (207).
 * @type {HTTPStatusCode}
 */
export const StatusMultiStatus: HTTPStatusCode = 207;

/**
 * Status code for Already Reported (208).
 * @type {HTTPStatusCode}
 */
export const StatusAlreadyReported: HTTPStatusCode = 208;

/**
 * Status code for IM Used (226).
 * @type {HTTPStatusCode}
 */
export const StatusIMUsed: HTTPStatusCode = 226;

/**
 * Status code for Multiple Choices (300).
 * @type {HTTPStatusCode}
 */
export const StatusMultipleChoices: HTTPStatusCode = 300;

/**
 * Status code for Moved Permanently (301).
 * @type {HTTPStatusCode}
 */
export const StatusMovedPermanently: HTTPStatusCode = 301;

/**
 * Status code for Found (302).
 * @type {HTTPStatusCode}
 */
export const StatusFound: HTTPStatusCode = 302;

/**
 * Status code for See Other (303).
 * @type {HTTPStatusCode}
 */
export const StatusSeeOther: HTTPStatusCode = 303;

/**
 * Status code for Not Modified (304).
 * @type {HTTPStatusCode}
 */
export const StatusNotModified: HTTPStatusCode = 304;

/**
 * Status code for Use Proxy (305).
 * @type {HTTPStatusCode}
 */
export const StatusUseProxy: HTTPStatusCode = 305;

/**
 * Status code for Temporary Redirect (307).
 * @type {HTTPStatusCode}
 */
export const StatusTemporaryRedirect: HTTPStatusCode = 307;

/**
 * Status code for Permanent Redirect (308).
 * @type {HTTPStatusCode}
 */
export const StatusPermanentRedirect: HTTPStatusCode = 308;

/**
 * Status code for Bad Request (400).
 * @type {HTTPStatusCode}
 */
export const StatusBadRequest: HTTPStatusCode = 400;

/**
 * Status code for Unauthorized (401).
 * @type {HTTPStatusCode}
 */
export const StatusUnauthorized: HTTPStatusCode = 401;

/**
 * Status code for Payment Required (402).
 * @type {HTTPStatusCode}
 */
export const StatusPaymentRequired: HTTPStatusCode = 402;

/**
 * Status code for Forbidden (403).
 * @type {HTTPStatusCode}
 */
export const StatusForbidden: HTTPStatusCode = 403;

/**
 * Status code for Not Found (404).
 * @type {HTTPStatusCode}
 */
export const StatusNotFound: HTTPStatusCode = 404;

/**
 * Status code for Method Not Allowed (405).
 * @type {HTTPStatusCode}
 */
export const StatusMethodNotAllowed: HTTPStatusCode = 405;

/**
 * Status code for Not Acceptable (406).
 * @type {HTTPStatusCode}
 */
export const StatusNotAcceptable: HTTPStatusCode = 406;

/**
 * Status code for Proxy Authentication Required (407).
 * @type {HTTPStatusCode}
 */
export const StatusProxyAuthRequired: HTTPStatusCode = 407;

/**
 * Status code for Request Timeout (408).
 * @type {HTTPStatusCode}
 */
export const StatusRequestTimeout: HTTPStatusCode = 408;

/**
 * Status code for Conflict (409).
 * @type {HTTPStatusCode}
 */
export const StatusConflict: HTTPStatusCode = 409;

/**
 * Status code for Gone (410).
 * @type {HTTPStatusCode}
 */
export const StatusGone: HTTPStatusCode = 410;

/**
 * Status code for Length Required (411).
 * @type {HTTPStatusCode}
 */
export const StatusLengthRequired: HTTPStatusCode = 411;

/**
 * Status code for Precondition Failed (412).
 * @type {HTTPStatusCode}
 */
export const StatusPreconditionFailed: HTTPStatusCode = 412;

/**
 * Status code for Request Entity Too Large (413).
 * @type {HTTPStatusCode}
 */
export const StatusRequestEntityTooLarge: HTTPStatusCode = 413;

/**
 * Status code for Request-URI Too Long (414).
 * @type {HTTPStatusCode}
 */
export const StatusRequestURITooLong: HTTPStatusCode = 414;

/**
 * Status code for Unsupported Media Type (415).
 * @type {HTTPStatusCode}
 */
export const StatusUnsupportedMediaType: HTTPStatusCode = 415;

/**
 * Status code for Requested Range Not Satisfiable (416).
 * @type {HTTPStatusCode}
 */
export const StatusRequestedRangeNotSatisfiable: HTTPStatusCode = 416;

/**
 * Status code for Expectation Failed (417).
 * @type {HTTPStatusCode}
 */
export const StatusExpectationFailed: HTTPStatusCode = 417;

/**
 * Status code for I'm a teapot (418).
 * @type {HTTPStatusCode}
 */
export const StatusTeapot: HTTPStatusCode = 418;

/**
 * Status code for Misdirected Request (421).
 * @type {HTTPStatusCode}
 */
export const StatusMisdirectedRequest: HTTPStatusCode = 421;

/**
 * Status code for Unprocessable Entity (422).
 * @type {HTTPStatusCode}
 */
export const StatusUnprocessableEntity: HTTPStatusCode = 422;

/**
 * Status code for Locked (423).
 * @type {HTTPStatusCode}
 */
export const StatusLocked: HTTPStatusCode = 423;

/**
 * Status code for Failed Dependency (424).
 * @type {HTTPStatusCode}
 */
export const StatusFailedDependency: HTTPStatusCode = 424;

/**
 * Status code for Too Early (425).
 * @type {HTTPStatusCode}
 */
export const StatusTooEarly: HTTPStatusCode = 425;

/**
 * Status code for Upgrade Required (426).
 * @type {HTTPStatusCode}
 */
export const StatusUpgradeRequired: HTTPStatusCode = 426;

/**
 * Status code for Precondition Required (428).
 * @type {HTTPStatusCode}
 */
export const StatusPreconditionRequired: HTTPStatusCode = 428;

/**
 * Status code for Too Many Requests (429).
 * @type {HTTPStatusCode}
 */
export const StatusTooManyRequests: HTTPStatusCode = 429;

/**
 * Status code for Request Header Fields Too Large (431).
 * @type {HTTPStatusCode}
 */
export const StatusRequestHeaderFieldsTooLarge: HTTPStatusCode = 431;

/**
 * Status code for Unavailable For Legal Reasons (451).
 * @type {HTTPStatusCode}
 */
export const StatusUnavailableForLegalReasons: HTTPStatusCode = 451;

/**
 * Status code for Internal Server Error (500).
 * @type {HTTPStatusCode}
 */
export const StatusInternalServerError: HTTPStatusCode = 500;

/**
 * Status code for Not Implemented (501).
 * @type {HTTPStatusCode}
 */
export const StatusNotImplemented: HTTPStatusCode = 501;

/**
 * Status code for Bad Gateway (502).
 * @type {HTTPStatusCode}
 */
export const StatusBadGateway: HTTPStatusCode = 502;

/**
 * Status code for Service Unavailable (503).
 * @type {HTTPStatusCode}
 */
export const StatusServiceUnavailable: HTTPStatusCode = 503;

/**
 * Status code for Gateway Timeout (504).
 * @type {HTTPStatusCode}
 */
export const StatusGatewayTimeout: HTTPStatusCode = 504;

/**
 * Status code for HTTP Version Not Supported (505).
 * @type {HTTPStatusCode}
 */
export const StatusHTTPVersionNotSupported: HTTPStatusCode = 505;

/**
 * Status code for Variant Also Negotiates (506).
 * @type {HTTPStatusCode}
 */
export const StatusVariantAlsoNegotiates: HTTPStatusCode = 506;

/**
 * Status code for Insufficient Storage (507).
 * @type {HTTPStatusCode}
 */
export const StatusInsufficientStorage: HTTPStatusCode = 507;

/**
 * Status code for Loop Detected (508).
 * @type {HTTPStatusCode}
 */
export const StatusLoopDetected: HTTPStatusCode = 508;

/**
 * Status code for Not Extended (510).
 * @type {HTTPStatusCode}
 */
export const StatusNotExtended: HTTPStatusCode = 510;

/**
 * Status code for Network Authentication Required (511).
 * @type {HTTPStatusCode}
 */
export const StatusNetworkAuthenticationRequired: HTTPStatusCode = 511;

/**
 * An object containing common HTTP status codes.
 * 
 * @type {Object}
 * @property {HTTPStatusCode} StatusContinue - The status code for Continue (100).
 * @property {HTTPStatusCode} StatusSwitchingProtocols - The status code for Switching Protocols (101).
 * @property {HTTPStatusCode} StatusProcessing - The status code for Processing (102).
 * @property {HTTPStatusCode} StatusEarlyHints - The status code for Early Hints (103).
 * @property {HTTPStatusCode} StatusOK - The status code for OK (200).
 * @property {HTTPStatusCode} StatusCreated - The status code for Created (201).
 * @property {HTTPStatusCode} StatusAccepted - The status code for Accepted (202).
 * @property {HTTPStatusCode} StatusNonAuthoritativeInfo - The status code for Non-Authoritative Information (203).
 * @property {HTTPStatusCode} StatusNoContent - The status code for No Content (204).
 * @property {HTTPStatusCode} StatusResetContent - The status code for Reset Content (205).
 * @property {HTTPStatusCode} StatusPartialContent - The status code for Partial Content (206).
 * @property {HTTPStatusCode} StatusMultiStatus - The status code for Multi-Status (207).
 * @property {HTTPStatusCode} StatusAlreadyReported - The status code for Already Reported (208).
 * @property {HTTPStatusCode} StatusIMUsed - The status code for IM Used (226).
 * @property {HTTPStatusCode} StatusMultipleChoices - The status code for Multiple Choices (300).
 * @property {HTTPStatusCode} StatusMovedPermanently - The status code for Moved Permanently (301).
 * @property {HTTPStatusCode} StatusFound - The status code for Found (302).
 * @property {HTTPStatusCode} StatusSeeOther - The status code for See Other (303).
 * @property {HTTPStatusCode} StatusNotModified - The status code for Not Modified (304).
 * @property {HTTPStatusCode} StatusUseProxy - The status code for Use Proxy (305).
 * @property {HTTPStatusCode} StatusTemporaryRedirect - The status code for Temporary Redirect (307).
 * @property {HTTPStatusCode} StatusPermanentRedirect - The status code for Permanent Redirect (308).
 * @property {HTTPStatusCode} StatusBadRequest - The status code for Bad Request (400).
 * @property {HTTPStatusCode} StatusUnauthorized - The status code for Unauthorized (401).
 * @property {HTTPStatusCode} StatusPaymentRequired - The status code for Payment Required (402).
 * @property {HTTPStatusCode} StatusForbidden - The status code for Forbidden (403).
 * @property {HTTPStatusCode} StatusNotFound - The status code for Not Found (404).
 * @property {HTTPStatusCode} StatusMethodNotAllowed - The status code for Method Not Allowed (405).
 * @property {HTTPStatusCode} StatusNotAcceptable - The status code for Not Acceptable (406).
 * @property {HTTPStatusCode} StatusProxyAuthRequired - The status code for Proxy Authentication Required (407).
 * @property {HTTPStatusCode} StatusRequestTimeout - The status code for Request Timeout (408).
 * @property {HTTPStatusCode} StatusConflict - The status code for Conflict (409).
 * @property {HTTPStatusCode} StatusGone - The status code for Gone (410).
 * @property {HTTPStatusCode} StatusLengthRequired - The status code for Length Required (411).
 * @property {HTTPStatusCode} StatusPreconditionFailed - The status code for Precondition Failed (412).
 * @property {HTTPStatusCode} StatusRequestEntityTooLarge - The status code for Request Entity Too Large (413).
 * @property {HTTPStatusCode} StatusRequestURITooLong - The status code for Request-URI Too Long (414).
 * @property {HTTPStatusCode} StatusUnsupportedMediaType - The status code for Unsupported Media Type (415).
 * @property {HTTPStatusCode} StatusRequestedRangeNotSatisfiable - The status code for Requested Range Not Satisfiable (416).
 * @property {HTTPStatusCode} StatusExpectationFailed - The status code for Expectation Failed (417).
 * @property {HTTPStatusCode} StatusTeapot - The status code for I'm a Teapot (418).
 * @property {HTTPStatusCode} StatusMisdirectedRequest - The status code for Misdirected Request (421).
 * @property {HTTPStatusCode} StatusUnprocessableEntity - The status code for Unprocessable Entity (422).
 * @property {HTTPStatusCode} StatusLocked - The status code for Locked (423).
 * @property {HTTPStatusCode} StatusFailedDependency - The status code for Failed Dependency (424).
 * @property {HTTPStatusCode} StatusTooEarly - The status code for Too Early (425).
 * @property {HTTPStatusCode} StatusUpgradeRequired - The status code for Upgrade Required (426).
 * @property {HTTPStatusCode} StatusPreconditionRequired - The status code for Precondition Required (428).
 * @property {HTTPStatusCode} StatusTooManyRequests - The status code for Too Many Requests (429).
 * @property {HTTPStatusCode} StatusRequestHeaderFieldsTooLarge - The status code for Request Header Fields Too Large (431).
 * @property {HTTPStatusCode} StatusUnavailableForLegalReasons - The status code for Unavailable For Legal Reasons (451).
 * @property {HTTPStatusCode} StatusInternalServerError - The status code for Internal Server Error (500).
 * @property {HTTPStatusCode} StatusNotImplemented - The status code for Not Implemented (501).
 * @property {HTTPStatusCode} StatusBadGateway - The status code for Bad Gateway (502).
 * @property {HTTPStatusCode} StatusServiceUnavailable - The status code for Service Unavailable (503).
 * @property {HTTPStatusCode} StatusGatewayTimeout - The status code for Gateway Timeout (504).
 * @property {HTTPStatusCode} StatusHTTPVersionNotSupported - The status code for HTTP Version Not Supported (505).
 * @property {HTTPStatusCode} StatusVariantAlsoNegotiates - The status code for Variant Also Negotiates (506).
 * @property {HTTPStatusCode} StatusInsufficientStorage - The status code for Insufficient Storage (507).
 * @property {HTTPStatusCode} StatusLoopDetected - The status code for Loop Detected (508).
 * @property {HTTPStatusCode} StatusNotExtended - The status code for Not Extended (510).
 * @property {HTTPStatusCode} StatusNetworkAuthenticationRequired - The status code for Network Authentication Required (511).
 */
export const StatusCodes = {
  StatusContinue,
  StatusSwitchingProtocols,
  StatusProcessing,
  StatusEarlyHints,
  StatusOK,
  StatusCreated,
  StatusAccepted,
  StatusNonAuthoritativeInfo,
  StatusNoContent,
  StatusResetContent,
  StatusPartialContent,
  StatusMultiStatus,
  StatusAlreadyReported,
  StatusIMUsed,
  StatusMultipleChoices,
  StatusMovedPermanently,
  StatusFound,
  StatusSeeOther,
  StatusNotModified,
  StatusUseProxy,
  StatusTemporaryRedirect,
  StatusPermanentRedirect,
  StatusBadRequest,
  StatusUnauthorized,
  StatusPaymentRequired,
  StatusForbidden,
  StatusNotFound,
  StatusMethodNotAllowed,
  StatusNotAcceptable,
  StatusProxyAuthRequired,
  StatusRequestTimeout,
  StatusConflict,
  StatusGone,
  StatusLengthRequired,
  StatusPreconditionFailed,
  StatusRequestEntityTooLarge,
  StatusRequestURITooLong,
  StatusUnsupportedMediaType,
  StatusRequestedRangeNotSatisfiable,
  StatusExpectationFailed,
  StatusTeapot,
  StatusMisdirectedRequest,
  StatusUnprocessableEntity,
  StatusLocked,
  StatusFailedDependency,
  StatusTooEarly,
  StatusUpgradeRequired,
  StatusPreconditionRequired,
  StatusTooManyRequests,
  StatusRequestHeaderFieldsTooLarge,
  StatusUnavailableForLegalReasons,
  StatusInternalServerError,
  StatusNotImplemented,
  StatusBadGateway,
  StatusServiceUnavailable,
  StatusGatewayTimeout,
  StatusHTTPVersionNotSupported,
  StatusVariantAlsoNegotiates,
  StatusInsufficientStorage,
  StatusLoopDetected,
  StatusNotExtended,
  StatusNetworkAuthenticationRequired,
}
