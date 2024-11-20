"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stamps = exports.TimeOnly = exports.DateOnly = exports.DateTime = exports.StampNano = exports.StampMicro = exports.StampMilli = exports.Stamp = exports.Formats = exports.Kitchen = exports.RFC3339Nano = exports.RFC3339 = exports.RFC1123Z = exports.RFC1123 = exports.RFC850 = exports.RFC822Z = exports.RFC822 = exports.RubyDate = exports.UnixDate = exports.ANSIC = exports.Layout = void 0;
exports.Layout = "MM/dd hh:mm:ssa 'yy -zzzz";
exports.ANSIC = "Mon Jan _2 hh:mm:ss yyyy";
exports.UnixDate = "Mon Jan _2 hh:mm:ss z yyyy";
exports.RubyDate = "Mon Jan 02 hh:mm:ss z yyyy";
exports.RFC822 = "dd Mon yy hh:mm z";
exports.RFC822Z = "dd Mon yy hh:mm z";
exports.RFC850 = "dddd, dd-Mon-yy hh:mm:ss z";
exports.RFC1123 = "Mon, dd Mon yyyy hh:mm:ss z";
exports.RFC1123Z = "Mon, dd Mon yyyy hh:mm:ss z";
exports.RFC3339 = "yyyy-MM-ddTHH:mm:ssZ";
exports.RFC3339Nano = "yyyy-MM-ddTHH:mm:ss.sssZ";
exports.Kitchen = "h:mma";
exports.Formats = {
    Layout: exports.Layout,
    ANSIC: exports.ANSIC,
    UnixDate: exports.UnixDate,
    RubyDate: exports.RubyDate,
    RFC822: exports.RFC822,
    RFC822Z: exports.RFC822Z,
    RFC850: exports.RFC850,
    RFC1123: exports.RFC1123,
    RFC1123Z: exports.RFC1123Z,
    RFC3339: exports.RFC3339,
    RFC3339Nano: exports.RFC3339Nano,
    Kitchen: exports.Kitchen,
};
exports.Stamp = "MMM _d hh:mm:ss";
exports.StampMilli = "MMM _d hh:mm:ss.sss";
exports.StampMicro = "MMM _d hh:mm:ss.sss";
exports.StampNano = "MMM _d hh:mm:ss.sss";
exports.DateTime = "yyyy-MM-dd hh:mm:ss";
exports.DateOnly = "yyyy-MM-dd";
exports.TimeOnly = "hh:mm:ss";
exports.Stamps = {
    Stamp: exports.Stamp,
    StampMilli: exports.StampMilli,
    StampMicro: exports.StampMicro,
    StampNano: exports.StampNano,
    DateTime: exports.DateTime,
    DateOnly: exports.DateOnly,
    TimeOnly: exports.TimeOnly,
};
