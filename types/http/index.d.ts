/**
 * @typedef {string} HTTPMethod
 * @description Common HTTP methods.
 * @enum {HTTPMethod}
 */
export type HTTPMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";
/**
 * Represents the GET HTTP method.
 * @type {HTTPMethod}
 */
export declare const Get: HTTPMethod;
/**
 * Represents the HEAD HTTP method.
 * @type {HTTPMethod}
 */
export declare const Head: HTTPMethod;
/**
 * Represents the POST HTTP method.
 * @type {HTTPMethod}
 */
export declare const Post: HTTPMethod;
/**
 * Represents the PUT HTTP method.
 * @type {HTTPMethod}
 */
export declare const Put: HTTPMethod;
/**
 * Represents the PATCH HTTP method.
 * @type {HTTPMethod}
 */
export declare const Patch: HTTPMethod;
/**
 * Represents the DELETE HTTP method.
 * @type {HTTPMethod}
 */
export declare const Delete: HTTPMethod;
/**
 * Represents the CONNECT HTTP method.
 * @type {HTTPMethod}
 */
export declare const Connect: HTTPMethod;
/**
 * Represents the OPTIONS HTTP method.
 * @type {HTTPMethod}
 */
export declare const Options: HTTPMethod;
/**
 * Represents the TRACE HTTP method.
 * @type {HTTPMethod}
 */
export declare const Trace: HTTPMethod;
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
export declare const HTTPMethods: {
  Get: "GET";
  Head: "HEAD";
  Post: "POST";
  Put: "PUT";
  Patch: "PATCH";
  Delete: "DELETE";
  Connect: "CONNECT";
  Options: "OPTIONS";
  Trace: "TRACE";
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
export declare const StatusContinue: HTTPStatusCode;
/**
 * Status code for Switching Protocols (101).
 * @type {HTTPStatusCode}
 */
export declare const StatusSwitchingProtocols: HTTPStatusCode;
/**
 * Status code for Processing (102).
 * @type {HTTPStatusCode}
 */
export declare const StatusProcessing: HTTPStatusCode;
/**
 * Status code for Early Hints (103).
 * @type {HTTPStatusCode}
 */
export declare const StatusEarlyHints: HTTPStatusCode;
/**
 * Status code for OK (200).
 * @type {HTTPStatusCode}
 */
export declare const StatusOK: HTTPStatusCode;
/**
 * Status code for Created (201).
 * @type {HTTPStatusCode}
 */
export declare const StatusCreated: HTTPStatusCode;
/**
 * Status code for Accepted (202).
 * @type {HTTPStatusCode}
 */
export declare const StatusAccepted: HTTPStatusCode;
/**
 * Status code for Non-Authoritative Information (203).
 * @type {HTTPStatusCode}
 */
export declare const StatusNonAuthoritativeInfo: HTTPStatusCode;
/**
 * Status code for No Content (204).
 * @type {HTTPStatusCode}
 */
export declare const StatusNoContent: HTTPStatusCode;
/**
 * Status code for Reset Content (205).
 * @type {HTTPStatusCode}
 */
export declare const StatusResetContent: HTTPStatusCode;
/**
 * Status code for Partial Content (206).
 * @type {HTTPStatusCode}
 */
export declare const StatusPartialContent: HTTPStatusCode;
/**
 * Status code for Multi-Status (207).
 * @type {HTTPStatusCode}
 */
export declare const StatusMultiStatus: HTTPStatusCode;
/**
 * Status code for Already Reported (208).
 * @type {HTTPStatusCode}
 */
export declare const StatusAlreadyReported: HTTPStatusCode;
/**
 * Status code for IM Used (226).
 * @type {HTTPStatusCode}
 */
export declare const StatusIMUsed: HTTPStatusCode;
/**
 * Status code for Multiple Choices (300).
 * @type {HTTPStatusCode}
 */
export declare const StatusMultipleChoices: HTTPStatusCode;
/**
 * Status code for Moved Permanently (301).
 * @type {HTTPStatusCode}
 */
export declare const StatusMovedPermanently: HTTPStatusCode;
/**
 * Status code for Found (302).
 * @type {HTTPStatusCode}
 */
export declare const StatusFound: HTTPStatusCode;
/**
 * Status code for See Other (303).
 * @type {HTTPStatusCode}
 */
export declare const StatusSeeOther: HTTPStatusCode;
/**
 * Status code for Not Modified (304).
 * @type {HTTPStatusCode}
 */
export declare const StatusNotModified: HTTPStatusCode;
/**
 * Status code for Use Proxy (305).
 * @type {HTTPStatusCode}
 */
export declare const StatusUseProxy: HTTPStatusCode;
/**
 * Status code for Temporary Redirect (307).
 * @type {HTTPStatusCode}
 */
export declare const StatusTemporaryRedirect: HTTPStatusCode;
/**
 * Status code for Permanent Redirect (308).
 * @type {HTTPStatusCode}
 */
export declare const StatusPermanentRedirect: HTTPStatusCode;
/**
 * Status code for Bad Request (400).
 * @type {HTTPStatusCode}
 */
export declare const StatusBadRequest: HTTPStatusCode;
/**
 * Status code for Unauthorized (401).
 * @type {HTTPStatusCode}
 */
export declare const StatusUnauthorized: HTTPStatusCode;
/**
 * Status code for Payment Required (402).
 * @type {HTTPStatusCode}
 */
export declare const StatusPaymentRequired: HTTPStatusCode;
/**
 * Status code for Forbidden (403).
 * @type {HTTPStatusCode}
 */
export declare const StatusForbidden: HTTPStatusCode;
/**
 * Status code for Not Found (404).
 * @type {HTTPStatusCode}
 */
export declare const StatusNotFound: HTTPStatusCode;
/**
 * Status code for Method Not Allowed (405).
 * @type {HTTPStatusCode}
 */
export declare const StatusMethodNotAllowed: HTTPStatusCode;
/**
 * Status code for Not Acceptable (406).
 * @type {HTTPStatusCode}
 */
export declare const StatusNotAcceptable: HTTPStatusCode;
/**
 * Status code for Proxy Authentication Required (407).
 * @type {HTTPStatusCode}
 */
export declare const StatusProxyAuthRequired: HTTPStatusCode;
/**
 * Status code for Request Timeout (408).
 * @type {HTTPStatusCode}
 */
export declare const StatusRequestTimeout: HTTPStatusCode;
/**
 * Status code for Conflict (409).
 * @type {HTTPStatusCode}
 */
export declare const StatusConflict: HTTPStatusCode;
/**
 * Status code for Gone (410).
 * @type {HTTPStatusCode}
 */
export declare const StatusGone: HTTPStatusCode;
/**
 * Status code for Length Required (411).
 * @type {HTTPStatusCode}
 */
export declare const StatusLengthRequired: HTTPStatusCode;
/**
 * Status code for Precondition Failed (412).
 * @type {HTTPStatusCode}
 */
export declare const StatusPreconditionFailed: HTTPStatusCode;
/**
 * Status code for Request Entity Too Large (413).
 * @type {HTTPStatusCode}
 */
export declare const StatusRequestEntityTooLarge: HTTPStatusCode;
/**
 * Status code for Request-URI Too Long (414).
 * @type {HTTPStatusCode}
 */
export declare const StatusRequestURITooLong: HTTPStatusCode;
/**
 * Status code for Unsupported Media Type (415).
 * @type {HTTPStatusCode}
 */
export declare const StatusUnsupportedMediaType: HTTPStatusCode;
/**
 * Status code for Requested Range Not Satisfiable (416).
 * @type {HTTPStatusCode}
 */
export declare const StatusRequestedRangeNotSatisfiable: HTTPStatusCode;
/**
 * Status code for Expectation Failed (417).
 * @type {HTTPStatusCode}
 */
export declare const StatusExpectationFailed: HTTPStatusCode;
/**
 * Status code for I'm a teapot (418).
 * @type {HTTPStatusCode}
 */
export declare const StatusTeapot: HTTPStatusCode;
/**
 * Status code for Misdirected Request (421).
 * @type {HTTPStatusCode}
 */
export declare const StatusMisdirectedRequest: HTTPStatusCode;
/**
 * Status code for Unprocessable Entity (422).
 * @type {HTTPStatusCode}
 */
export declare const StatusUnprocessableEntity: HTTPStatusCode;
/**
 * Status code for Locked (423).
 * @type {HTTPStatusCode}
 */
export declare const StatusLocked: HTTPStatusCode;
/**
 * Status code for Failed Dependency (424).
 * @type {HTTPStatusCode}
 */
export declare const StatusFailedDependency: HTTPStatusCode;
/**
 * Status code for Too Early (425).
 * @type {HTTPStatusCode}
 */
export declare const StatusTooEarly: HTTPStatusCode;
/**
 * Status code for Upgrade Required (426).
 * @type {HTTPStatusCode}
 */
export declare const StatusUpgradeRequired: HTTPStatusCode;
/**
 * Status code for Precondition Required (428).
 * @type {HTTPStatusCode}
 */
export declare const StatusPreconditionRequired: HTTPStatusCode;
/**
 * Status code for Too Many Requests (429).
 * @type {HTTPStatusCode}
 */
export declare const StatusTooManyRequests: HTTPStatusCode;
/**
 * Status code for Request Header Fields Too Large (431).
 * @type {HTTPStatusCode}
 */
export declare const StatusRequestHeaderFieldsTooLarge: HTTPStatusCode;
/**
 * Status code for Unavailable For Legal Reasons (451).
 * @type {HTTPStatusCode}
 */
export declare const StatusUnavailableForLegalReasons: HTTPStatusCode;
/**
 * Status code for Internal Server Error (500).
 * @type {HTTPStatusCode}
 */
export declare const StatusInternalServerError: HTTPStatusCode;
/**
 * Status code for Not Implemented (501).
 * @type {HTTPStatusCode}
 */
export declare const StatusNotImplemented: HTTPStatusCode;
/**
 * Status code for Bad Gateway (502).
 * @type {HTTPStatusCode}
 */
export declare const StatusBadGateway: HTTPStatusCode;
/**
 * Status code for Service Unavailable (503).
 * @type {HTTPStatusCode}
 */
export declare const StatusServiceUnavailable: HTTPStatusCode;
/**
 * Status code for Gateway Timeout (504).
 * @type {HTTPStatusCode}
 */
export declare const StatusGatewayTimeout: HTTPStatusCode;
/**
 * Status code for HTTP Version Not Supported (505).
 * @type {HTTPStatusCode}
 */
export declare const StatusHTTPVersionNotSupported: HTTPStatusCode;
/**
 * Status code for Variant Also Negotiates (506).
 * @type {HTTPStatusCode}
 */
export declare const StatusVariantAlsoNegotiates: HTTPStatusCode;
/**
 * Status code for Insufficient Storage (507).
 * @type {HTTPStatusCode}
 */
export declare const StatusInsufficientStorage: HTTPStatusCode;
/**
 * Status code for Loop Detected (508).
 * @type {HTTPStatusCode}
 */
export declare const StatusLoopDetected: HTTPStatusCode;
/**
 * Status code for Not Extended (510).
 * @type {HTTPStatusCode}
 */
export declare const StatusNotExtended: HTTPStatusCode;
/**
 * Status code for Network Authentication Required (511).
 * @type {HTTPStatusCode}
 */
export declare const StatusNetworkAuthenticationRequired: HTTPStatusCode;
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
export declare const StatusCodes: {
  StatusContinue: number;
  StatusSwitchingProtocols: number;
  StatusProcessing: number;
  StatusEarlyHints: number;
  StatusOK: number;
  StatusCreated: number;
  StatusAccepted: number;
  StatusNonAuthoritativeInfo: number;
  StatusNoContent: number;
  StatusResetContent: number;
  StatusPartialContent: number;
  StatusMultiStatus: number;
  StatusAlreadyReported: number;
  StatusIMUsed: number;
  StatusMultipleChoices: number;
  StatusMovedPermanently: number;
  StatusFound: number;
  StatusSeeOther: number;
  StatusNotModified: number;
  StatusUseProxy: number;
  StatusTemporaryRedirect: number;
  StatusPermanentRedirect: number;
  StatusBadRequest: number;
  StatusUnauthorized: number;
  StatusPaymentRequired: number;
  StatusForbidden: number;
  StatusNotFound: number;
  StatusMethodNotAllowed: number;
  StatusNotAcceptable: number;
  StatusProxyAuthRequired: number;
  StatusRequestTimeout: number;
  StatusConflict: number;
  StatusGone: number;
  StatusLengthRequired: number;
  StatusPreconditionFailed: number;
  StatusRequestEntityTooLarge: number;
  StatusRequestURITooLong: number;
  StatusUnsupportedMediaType: number;
  StatusRequestedRangeNotSatisfiable: number;
  StatusExpectationFailed: number;
  StatusTeapot: number;
  StatusMisdirectedRequest: number;
  StatusUnprocessableEntity: number;
  StatusLocked: number;
  StatusFailedDependency: number;
  StatusTooEarly: number;
  StatusUpgradeRequired: number;
  StatusPreconditionRequired: number;
  StatusTooManyRequests: number;
  StatusRequestHeaderFieldsTooLarge: number;
  StatusUnavailableForLegalReasons: number;
  StatusInternalServerError: number;
  StatusNotImplemented: number;
  StatusBadGateway: number;
  StatusServiceUnavailable: number;
  StatusGatewayTimeout: number;
  StatusHTTPVersionNotSupported: number;
  StatusVariantAlsoNegotiates: number;
  StatusInsufficientStorage: number;
  StatusLoopDetected: number;
  StatusNotExtended: number;
  StatusNetworkAuthenticationRequired: number;
};
