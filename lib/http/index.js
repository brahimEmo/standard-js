"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusExpectationFailed = exports.StatusRequestedRangeNotSatisfiable = exports.StatusUnsupportedMediaType = exports.StatusRequestURITooLong = exports.StatusRequestEntityTooLarge = exports.StatusPreconditionFailed = exports.StatusLengthRequired = exports.StatusGone = exports.StatusConflict = exports.StatusRequestTimeout = exports.StatusProxyAuthRequired = exports.StatusNotAcceptable = exports.StatusMethodNotAllowed = exports.StatusNotFound = exports.StatusForbidden = exports.StatusPaymentRequired = exports.StatusUnauthorized = exports.StatusBadRequest = exports.StatusPermanentRedirect = exports.StatusTemporaryRedirect = exports.StatusUseProxy = exports.StatusNotModified = exports.StatusSeeOther = exports.StatusFound = exports.StatusMovedPermanently = exports.StatusMultipleChoices = exports.StatusIMUsed = exports.StatusAlreadyReported = exports.StatusMultiStatus = exports.StatusPartialContent = exports.StatusResetContent = exports.StatusNoContent = exports.StatusNonAuthoritativeInfo = exports.StatusAccepted = exports.StatusCreated = exports.StatusOK = exports.StatusEarlyHints = exports.StatusProcessing = exports.StatusSwitchingProtocols = exports.StatusContinue = exports.HTTPMethods = exports.Trace = exports.Options = exports.Connect = exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Head = exports.Get = void 0;
exports.StatusCodes = exports.StatusNetworkAuthenticationRequired = exports.StatusNotExtended = exports.StatusLoopDetected = exports.StatusInsufficientStorage = exports.StatusVariantAlsoNegotiates = exports.StatusHTTPVersionNotSupported = exports.StatusGatewayTimeout = exports.StatusServiceUnavailable = exports.StatusBadGateway = exports.StatusNotImplemented = exports.StatusInternalServerError = exports.StatusUnavailableForLegalReasons = exports.StatusRequestHeaderFieldsTooLarge = exports.StatusTooManyRequests = exports.StatusPreconditionRequired = exports.StatusUpgradeRequired = exports.StatusTooEarly = exports.StatusFailedDependency = exports.StatusLocked = exports.StatusUnprocessableEntity = exports.StatusMisdirectedRequest = exports.StatusTeapot = void 0;
/**
 * Represents the GET HTTP method.
 * @type {HTTPMethod}
 */
exports.Get = "GET";
/**
 * Represents the HEAD HTTP method.
 * @type {HTTPMethod}
 */
exports.Head = "HEAD";
/**
 * Represents the POST HTTP method.
 * @type {HTTPMethod}
 */
exports.Post = "POST";
/**
 * Represents the PUT HTTP method.
 * @type {HTTPMethod}
 */
exports.Put = "PUT";
/**
 * Represents the PATCH HTTP method.
 * @type {HTTPMethod}
 */
exports.Patch = "PATCH";
/**
 * Represents the DELETE HTTP method.
 * @type {HTTPMethod}
 */
exports.Delete = "DELETE";
/**
 * Represents the CONNECT HTTP method.
 * @type {HTTPMethod}
 */
exports.Connect = "CONNECT";
/**
 * Represents the OPTIONS HTTP method.
 * @type {HTTPMethod}
 */
exports.Options = "OPTIONS";
/**
 * Represents the TRACE HTTP method.
 * @type {HTTPMethod}
 */
exports.Trace = "TRACE";
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
exports.HTTPMethods = {
    Get: exports.Get,
    Head: exports.Head,
    Post: exports.Post,
    Put: exports.Put,
    Patch: exports.Patch,
    Delete: exports.Delete,
    Connect: exports.Connect,
    Options: exports.Options,
    Trace: exports.Trace,
};
/**
 * Status code for Continue (100).
 * @type {HTTPStatusCode}
 */
exports.StatusContinue = 100;
/**
 * Status code for Switching Protocols (101).
 * @type {HTTPStatusCode}
 */
exports.StatusSwitchingProtocols = 101;
/**
 * Status code for Processing (102).
 * @type {HTTPStatusCode}
 */
exports.StatusProcessing = 102;
/**
 * Status code for Early Hints (103).
 * @type {HTTPStatusCode}
 */
exports.StatusEarlyHints = 103;
/**
 * Status code for OK (200).
 * @type {HTTPStatusCode}
 */
exports.StatusOK = 200;
/**
 * Status code for Created (201).
 * @type {HTTPStatusCode}
 */
exports.StatusCreated = 201;
/**
 * Status code for Accepted (202).
 * @type {HTTPStatusCode}
 */
exports.StatusAccepted = 202;
/**
 * Status code for Non-Authoritative Information (203).
 * @type {HTTPStatusCode}
 */
exports.StatusNonAuthoritativeInfo = 203;
/**
 * Status code for No Content (204).
 * @type {HTTPStatusCode}
 */
exports.StatusNoContent = 204;
/**
 * Status code for Reset Content (205).
 * @type {HTTPStatusCode}
 */
exports.StatusResetContent = 205;
/**
 * Status code for Partial Content (206).
 * @type {HTTPStatusCode}
 */
exports.StatusPartialContent = 206;
/**
 * Status code for Multi-Status (207).
 * @type {HTTPStatusCode}
 */
exports.StatusMultiStatus = 207;
/**
 * Status code for Already Reported (208).
 * @type {HTTPStatusCode}
 */
exports.StatusAlreadyReported = 208;
/**
 * Status code for IM Used (226).
 * @type {HTTPStatusCode}
 */
exports.StatusIMUsed = 226;
/**
 * Status code for Multiple Choices (300).
 * @type {HTTPStatusCode}
 */
exports.StatusMultipleChoices = 300;
/**
 * Status code for Moved Permanently (301).
 * @type {HTTPStatusCode}
 */
exports.StatusMovedPermanently = 301;
/**
 * Status code for Found (302).
 * @type {HTTPStatusCode}
 */
exports.StatusFound = 302;
/**
 * Status code for See Other (303).
 * @type {HTTPStatusCode}
 */
exports.StatusSeeOther = 303;
/**
 * Status code for Not Modified (304).
 * @type {HTTPStatusCode}
 */
exports.StatusNotModified = 304;
/**
 * Status code for Use Proxy (305).
 * @type {HTTPStatusCode}
 */
exports.StatusUseProxy = 305;
/**
 * Status code for Temporary Redirect (307).
 * @type {HTTPStatusCode}
 */
exports.StatusTemporaryRedirect = 307;
/**
 * Status code for Permanent Redirect (308).
 * @type {HTTPStatusCode}
 */
exports.StatusPermanentRedirect = 308;
/**
 * Status code for Bad Request (400).
 * @type {HTTPStatusCode}
 */
exports.StatusBadRequest = 400;
/**
 * Status code for Unauthorized (401).
 * @type {HTTPStatusCode}
 */
exports.StatusUnauthorized = 401;
/**
 * Status code for Payment Required (402).
 * @type {HTTPStatusCode}
 */
exports.StatusPaymentRequired = 402;
/**
 * Status code for Forbidden (403).
 * @type {HTTPStatusCode}
 */
exports.StatusForbidden = 403;
/**
 * Status code for Not Found (404).
 * @type {HTTPStatusCode}
 */
exports.StatusNotFound = 404;
/**
 * Status code for Method Not Allowed (405).
 * @type {HTTPStatusCode}
 */
exports.StatusMethodNotAllowed = 405;
/**
 * Status code for Not Acceptable (406).
 * @type {HTTPStatusCode}
 */
exports.StatusNotAcceptable = 406;
/**
 * Status code for Proxy Authentication Required (407).
 * @type {HTTPStatusCode}
 */
exports.StatusProxyAuthRequired = 407;
/**
 * Status code for Request Timeout (408).
 * @type {HTTPStatusCode}
 */
exports.StatusRequestTimeout = 408;
/**
 * Status code for Conflict (409).
 * @type {HTTPStatusCode}
 */
exports.StatusConflict = 409;
/**
 * Status code for Gone (410).
 * @type {HTTPStatusCode}
 */
exports.StatusGone = 410;
/**
 * Status code for Length Required (411).
 * @type {HTTPStatusCode}
 */
exports.StatusLengthRequired = 411;
/**
 * Status code for Precondition Failed (412).
 * @type {HTTPStatusCode}
 */
exports.StatusPreconditionFailed = 412;
/**
 * Status code for Request Entity Too Large (413).
 * @type {HTTPStatusCode}
 */
exports.StatusRequestEntityTooLarge = 413;
/**
 * Status code for Request-URI Too Long (414).
 * @type {HTTPStatusCode}
 */
exports.StatusRequestURITooLong = 414;
/**
 * Status code for Unsupported Media Type (415).
 * @type {HTTPStatusCode}
 */
exports.StatusUnsupportedMediaType = 415;
/**
 * Status code for Requested Range Not Satisfiable (416).
 * @type {HTTPStatusCode}
 */
exports.StatusRequestedRangeNotSatisfiable = 416;
/**
 * Status code for Expectation Failed (417).
 * @type {HTTPStatusCode}
 */
exports.StatusExpectationFailed = 417;
/**
 * Status code for I'm a teapot (418).
 * @type {HTTPStatusCode}
 */
exports.StatusTeapot = 418;
/**
 * Status code for Misdirected Request (421).
 * @type {HTTPStatusCode}
 */
exports.StatusMisdirectedRequest = 421;
/**
 * Status code for Unprocessable Entity (422).
 * @type {HTTPStatusCode}
 */
exports.StatusUnprocessableEntity = 422;
/**
 * Status code for Locked (423).
 * @type {HTTPStatusCode}
 */
exports.StatusLocked = 423;
/**
 * Status code for Failed Dependency (424).
 * @type {HTTPStatusCode}
 */
exports.StatusFailedDependency = 424;
/**
 * Status code for Too Early (425).
 * @type {HTTPStatusCode}
 */
exports.StatusTooEarly = 425;
/**
 * Status code for Upgrade Required (426).
 * @type {HTTPStatusCode}
 */
exports.StatusUpgradeRequired = 426;
/**
 * Status code for Precondition Required (428).
 * @type {HTTPStatusCode}
 */
exports.StatusPreconditionRequired = 428;
/**
 * Status code for Too Many Requests (429).
 * @type {HTTPStatusCode}
 */
exports.StatusTooManyRequests = 429;
/**
 * Status code for Request Header Fields Too Large (431).
 * @type {HTTPStatusCode}
 */
exports.StatusRequestHeaderFieldsTooLarge = 431;
/**
 * Status code for Unavailable For Legal Reasons (451).
 * @type {HTTPStatusCode}
 */
exports.StatusUnavailableForLegalReasons = 451;
/**
 * Status code for Internal Server Error (500).
 * @type {HTTPStatusCode}
 */
exports.StatusInternalServerError = 500;
/**
 * Status code for Not Implemented (501).
 * @type {HTTPStatusCode}
 */
exports.StatusNotImplemented = 501;
/**
 * Status code for Bad Gateway (502).
 * @type {HTTPStatusCode}
 */
exports.StatusBadGateway = 502;
/**
 * Status code for Service Unavailable (503).
 * @type {HTTPStatusCode}
 */
exports.StatusServiceUnavailable = 503;
/**
 * Status code for Gateway Timeout (504).
 * @type {HTTPStatusCode}
 */
exports.StatusGatewayTimeout = 504;
/**
 * Status code for HTTP Version Not Supported (505).
 * @type {HTTPStatusCode}
 */
exports.StatusHTTPVersionNotSupported = 505;
/**
 * Status code for Variant Also Negotiates (506).
 * @type {HTTPStatusCode}
 */
exports.StatusVariantAlsoNegotiates = 506;
/**
 * Status code for Insufficient Storage (507).
 * @type {HTTPStatusCode}
 */
exports.StatusInsufficientStorage = 507;
/**
 * Status code for Loop Detected (508).
 * @type {HTTPStatusCode}
 */
exports.StatusLoopDetected = 508;
/**
 * Status code for Not Extended (510).
 * @type {HTTPStatusCode}
 */
exports.StatusNotExtended = 510;
/**
 * Status code for Network Authentication Required (511).
 * @type {HTTPStatusCode}
 */
exports.StatusNetworkAuthenticationRequired = 511;
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
exports.StatusCodes = {
    StatusContinue: exports.StatusContinue,
    StatusSwitchingProtocols: exports.StatusSwitchingProtocols,
    StatusProcessing: exports.StatusProcessing,
    StatusEarlyHints: exports.StatusEarlyHints,
    StatusOK: exports.StatusOK,
    StatusCreated: exports.StatusCreated,
    StatusAccepted: exports.StatusAccepted,
    StatusNonAuthoritativeInfo: exports.StatusNonAuthoritativeInfo,
    StatusNoContent: exports.StatusNoContent,
    StatusResetContent: exports.StatusResetContent,
    StatusPartialContent: exports.StatusPartialContent,
    StatusMultiStatus: exports.StatusMultiStatus,
    StatusAlreadyReported: exports.StatusAlreadyReported,
    StatusIMUsed: exports.StatusIMUsed,
    StatusMultipleChoices: exports.StatusMultipleChoices,
    StatusMovedPermanently: exports.StatusMovedPermanently,
    StatusFound: exports.StatusFound,
    StatusSeeOther: exports.StatusSeeOther,
    StatusNotModified: exports.StatusNotModified,
    StatusUseProxy: exports.StatusUseProxy,
    StatusTemporaryRedirect: exports.StatusTemporaryRedirect,
    StatusPermanentRedirect: exports.StatusPermanentRedirect,
    StatusBadRequest: exports.StatusBadRequest,
    StatusUnauthorized: exports.StatusUnauthorized,
    StatusPaymentRequired: exports.StatusPaymentRequired,
    StatusForbidden: exports.StatusForbidden,
    StatusNotFound: exports.StatusNotFound,
    StatusMethodNotAllowed: exports.StatusMethodNotAllowed,
    StatusNotAcceptable: exports.StatusNotAcceptable,
    StatusProxyAuthRequired: exports.StatusProxyAuthRequired,
    StatusRequestTimeout: exports.StatusRequestTimeout,
    StatusConflict: exports.StatusConflict,
    StatusGone: exports.StatusGone,
    StatusLengthRequired: exports.StatusLengthRequired,
    StatusPreconditionFailed: exports.StatusPreconditionFailed,
    StatusRequestEntityTooLarge: exports.StatusRequestEntityTooLarge,
    StatusRequestURITooLong: exports.StatusRequestURITooLong,
    StatusUnsupportedMediaType: exports.StatusUnsupportedMediaType,
    StatusRequestedRangeNotSatisfiable: exports.StatusRequestedRangeNotSatisfiable,
    StatusExpectationFailed: exports.StatusExpectationFailed,
    StatusTeapot: exports.StatusTeapot,
    StatusMisdirectedRequest: exports.StatusMisdirectedRequest,
    StatusUnprocessableEntity: exports.StatusUnprocessableEntity,
    StatusLocked: exports.StatusLocked,
    StatusFailedDependency: exports.StatusFailedDependency,
    StatusTooEarly: exports.StatusTooEarly,
    StatusUpgradeRequired: exports.StatusUpgradeRequired,
    StatusPreconditionRequired: exports.StatusPreconditionRequired,
    StatusTooManyRequests: exports.StatusTooManyRequests,
    StatusRequestHeaderFieldsTooLarge: exports.StatusRequestHeaderFieldsTooLarge,
    StatusUnavailableForLegalReasons: exports.StatusUnavailableForLegalReasons,
    StatusInternalServerError: exports.StatusInternalServerError,
    StatusNotImplemented: exports.StatusNotImplemented,
    StatusBadGateway: exports.StatusBadGateway,
    StatusServiceUnavailable: exports.StatusServiceUnavailable,
    StatusGatewayTimeout: exports.StatusGatewayTimeout,
    StatusHTTPVersionNotSupported: exports.StatusHTTPVersionNotSupported,
    StatusVariantAlsoNegotiates: exports.StatusVariantAlsoNegotiates,
    StatusInsufficientStorage: exports.StatusInsufficientStorage,
    StatusLoopDetected: exports.StatusLoopDetected,
    StatusNotExtended: exports.StatusNotExtended,
    StatusNetworkAuthenticationRequired: exports.StatusNetworkAuthenticationRequired,
};
