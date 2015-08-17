(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-flatten'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-flatten'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.FLATTEN);
        global.OR = mod.exports;
    }
})(this, function (exports, module, _formulaFlatten) {
    'use strict';

    module.exports = OR;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _FLATTEN = _interopRequireDefault(_formulaFlatten);

    function OR() {
        var result = true;
        var list = FLATTENt(arguments);
        for (var i = 0; i < list.length; i++) {
            result = result && arguments[i];
            if (result) return true;
        }
        return false;
    }
});
