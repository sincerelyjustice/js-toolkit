"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceElements = exports.range = exports.removeDuplicates = exports.hasLength = void 0;
var hasLength = function (array) { return Boolean(array.length); };
exports.hasLength = hasLength;
var removeDuplicates = function (array) {
    var uniques = [];
    var seen = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        var key = "".concat(typeof item, "_").concat(item);
        if (!seen[key]) {
            uniques.push(item);
            seen[key] = true;
        }
    }
    return uniques;
};
exports.removeDuplicates = removeDuplicates;
var range = function (bound) {
    var rangeArr = [];
    for (var i = 0; i <= bound; i++) {
        rangeArr.push(i);
    }
    return rangeArr;
};
exports.range = range;
var replaceElements = function (array, predicate, replacement) {
    var newArr = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var element = array_2[_i];
        if (predicate(element)) {
            newArr.push(replacement);
        }
        else {
            newArr.push(element);
        }
    }
    return newArr;
};
exports.replaceElements = replaceElements;
