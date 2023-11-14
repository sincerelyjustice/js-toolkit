"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceIfNotEscaped = exports.isEscaped = void 0;
var ESCAPE_CHAR = '\\';
var isEscaped = function (string, substringLocation) {
    var hasPrecedingBackslash = substringLocation > 0 && string[substringLocation - 1] === ESCAPE_CHAR;
    var hasAnother = hasPrecedingBackslash && string[substringLocation - 2] === ESCAPE_CHAR;
    return hasPrecedingBackslash && !hasAnother;
};
exports.isEscaped = isEscaped;
var replaceIfNotEscaped = function (text, pattern, replacement) {
    return text.replace(pattern, function () {
        var matchArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            matchArgs[_i] = arguments[_i];
        }
        var matchLocation = matchArgs[matchArgs.length - 2];
        if ((0, exports.isEscaped)(text, matchLocation)) {
            var originalText = matchArgs[0];
            return originalText;
        }
        else if (typeof replacement === 'function') {
            return replacement.apply(void 0, matchArgs);
        }
        else {
            return replacement;
        }
    });
};
exports.replaceIfNotEscaped = replaceIfNotEscaped;
