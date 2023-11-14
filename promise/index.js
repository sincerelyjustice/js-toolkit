"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryPromise = exports.withTimeout = void 0;
var withTimeout = function (fn, options) {
    if (options === void 0) { options = {}; }
    var _a = options.timeout, timeout = _a === void 0 ? 5000 : _a, _b = options.errorMessage, errorMessage = _b === void 0 ? 'Request timed out.' : _b;
    var timer;
    var timeouter = function () {
        return new Promise(function (_, reject) {
            timer = setTimeout(function () {
                reject(new Error(errorMessage));
            }, timeout);
        });
    };
    return function () {
        return Promise.race([fn(), timeouter()]).finally(function () { return clearTimeout(timer); });
    };
};
exports.withTimeout = withTimeout;
var retryPromise = function (fn, options) {
    if (options === void 0) { options = {}; }
    var _a = options.retries, retries = _a === void 0 ? 3 : _a, _b = options.delay, delay = _b === void 0 ? 1000 : _b;
    var triesLeft = retries;
    return new Promise(function (resolve, reject) {
        var attempt = function () {
            fn()
                .then(resolve)
                .catch(function (err) {
                if (triesLeft === 0) {
                    reject(err);
                }
                else {
                    setTimeout(function () {
                        triesLeft--;
                        attempt();
                    }, delay);
                }
            });
        };
        attempt();
    });
};
exports.retryPromise = retryPromise;
