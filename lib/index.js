"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stamps = exports.Formats = exports.Math = exports.StatusCodes = exports.HTTPMethods = void 0;
__exportStar(require("./http/index"), exports);
var index_1 = require("./http/index");
Object.defineProperty(exports, "HTTPMethods", { enumerable: true, get: function () { return index_1.HTTPMethods; } });
Object.defineProperty(exports, "StatusCodes", { enumerable: true, get: function () { return index_1.StatusCodes; } });
__exportStar(require("./math/index"), exports);
var index_2 = require("./math/index");
Object.defineProperty(exports, "Math", { enumerable: true, get: function () { return index_2.Math; } });
__exportStar(require("./time/index"), exports);
var index_3 = require("./time/index");
Object.defineProperty(exports, "Formats", { enumerable: true, get: function () { return index_3.Formats; } });
Object.defineProperty(exports, "Stamps", { enumerable: true, get: function () { return index_3.Stamps; } });
