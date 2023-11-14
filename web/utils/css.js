"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choiceClass = exports.optionalClass = exports.gatherClasses = void 0;
var gatherClasses = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    var trueNames = classNames.filter(function (className) { return !!className; });
    return trueNames.join(' ');
};
exports.gatherClasses = gatherClasses;
var optionalClass = function (className, condition) {
    return condition ? className : '';
};
exports.optionalClass = optionalClass;
var choiceClass = function (class1, class2, choice) {
    return choice ? class1 : class2;
};
exports.choiceClass = choiceClass;
