"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObj = exports.copyJson = void 0;
var copyJson = function (json) {
    return JSON.parse(JSON.stringify(json));
};
exports.copyJson = copyJson;
var isEmptyObj = function (obj) {
    return !Boolean(Object.keys(obj).length);
};
exports.isEmptyObj = isEmptyObj;
