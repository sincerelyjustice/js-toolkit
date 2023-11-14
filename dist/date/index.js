"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalendarDate = void 0;
var getCalendarDate = function (date) {
    return new Date(date).toLocaleDateString('en-GB');
};
exports.getCalendarDate = getCalendarDate;
