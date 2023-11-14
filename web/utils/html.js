"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedValue = void 0;
var getSelectedValue = function (selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    return selectedOption.value;
};
exports.getSelectedValue = getSelectedValue;
