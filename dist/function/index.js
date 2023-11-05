"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.negator = exports.equalityFactory = void 0;
var equalityFactory = function (target) {
    return function (source) { return source === target; };
};
exports.equalityFactory = equalityFactory;
var negator = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !fn.apply(void 0, args);
    };
};
exports.negator = negator;
var pipe = function (args) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    var result;
    for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];
        if (i === 0) {
            result = fn.apply(void 0, args);
        }
        else {
            result = fn(result);
        }
    }
    return result;
};
exports.pipe = pipe;
