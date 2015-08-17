(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.index = mod.exports;
    }
})(this, function (exports, module) {
    "use strict";

    module.exports = OR;

    function OR() {
        var result = true;
        var list = fn.flatten(arguments);
        for (var i = 0; i < list.length; i++) {
            result = result && arguments[i];
            if (result) return true;
        }
        return false;
    }
});
