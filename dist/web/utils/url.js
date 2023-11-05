"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailUrl = exports.addPlaceholderPathParams = exports.joinUrlPaths = void 0;
var joinUrlPaths = function (path1, path2) {
    var gotTrailingSlash = path1.endsWith('/');
    var gotLeadingSlash = path2.startsWith('/');
    if (gotTrailingSlash && gotLeadingSlash) {
        return "".concat(path1).concat(path2.slice(1));
    }
    else if (!gotTrailingSlash && !gotLeadingSlash) {
        return "".concat(path1, "/").concat(path2);
    }
    else {
        return "".concat(path1).concat(path2);
    }
};
exports.joinUrlPaths = joinUrlPaths;
var addPlaceholderPathParams = function (baseUrl) {
    var paramNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paramNames[_i - 1] = arguments[_i];
    }
    var path = paramNames.map(function (name) { return ":".concat(name); }).join('/');
    var url = (0, exports.joinUrlPaths)(baseUrl, path);
    return url;
};
exports.addPlaceholderPathParams = addPlaceholderPathParams;
var getEmailUrl = function (email) {
    return "mailto:".concat(email);
};
exports.getEmailUrl = getEmailUrl;
