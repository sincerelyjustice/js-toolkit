"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.removeDuplicates = void 0;
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
