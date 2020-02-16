System.register([], function (exports_1, context_1) {
    "use strict";
    var Resultado;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Resultado = class Resultado {
                constructor(_jogo, _data, _dezenas) {
                    this._jogo = _jogo;
                    this._data = _data;
                    this._dezenas = _dezenas;
                }
                get jogo() {
                    return this._jogo;
                }
                get data() {
                    return this._data;
                }
                get dezenas() {
                    return this._dezenas;
                }
            };
            exports_1("Resultado", Resultado);
        }
    };
});
