"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvToArray = exports.capitalize = void 0;
var checks_1 = require("./checks");
var capitalize = function (word) {
    if (!(0, checks_1.isEmptyString)(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    else
        return word;
};
exports.capitalize = capitalize;
var csvToArray = function (csv) {
    return (0, checks_1.isEmptyString)(csv) ? [] : csv.split(',');
};
exports.csvToArray = csvToArray;
