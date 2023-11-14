"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erasable = exports.csvToArray = exports.insertVariables = exports.joinSentences = exports.capitalize = void 0;
var checks_1 = require("./checks");
var regex_1 = require("./regex");
var capitalize = function (word) {
    if (!(0, checks_1.isEmptyString)(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    else
        return word;
};
exports.capitalize = capitalize;
var joinSentences = function (sentence1, sentence2) {
    var normedSentence1 = sentence1.trim().replace(/\.$/, '');
    var normedSentence2 = sentence2.trim();
    return "".concat(normedSentence1, ". ").concat(normedSentence2);
};
exports.joinSentences = joinSentences;
var insertVariables = function (string, variables) {
    var variabled = string;
    for (var _i = 0, _a = Object.entries(variables); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        variabled = string.replace((0, regex_1.globalRegex)("\\$\\{".concat(key, "\\}")), value);
    }
    return variabled;
};
exports.insertVariables = insertVariables;
var csvToArray = function (csv) {
    return (0, checks_1.isEmptyString)(csv) ? [] : csv.split(',');
};
exports.csvToArray = csvToArray;
var erasable = function (string, erasureCondition) {
    return erasureCondition ? '' : string;
};
exports.erasable = erasable;
