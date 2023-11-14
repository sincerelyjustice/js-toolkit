"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesAny = exports.globalRegex = void 0;
var globalRegex = function (regex) {
    return new RegExp(regex, 'g');
};
exports.globalRegex = globalRegex;
var matchesAny = function (string, regexps) {
    for (var _i = 0, regexps_1 = regexps; _i < regexps_1.length; _i++) {
        var regex = regexps_1[_i];
        if (regex.test(string)) {
            return true;
        }
    }
    return false;
};
exports.matchesAny = matchesAny;
