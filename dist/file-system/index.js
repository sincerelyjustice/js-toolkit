"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forwardSlashes = exports.arrayToPath = void 0;
var path_1 = __importDefault(require("path"));
var arrayToPath = function (array) {
    return path_1.default.join.apply(path_1.default, array);
};
exports.arrayToPath = arrayToPath;
var forwardSlashes = function (path) {
    return path.replace(/\\/g, '/');
};
exports.forwardSlashes = forwardSlashes;
