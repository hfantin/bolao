System.register([], function (exports_1, context_1) {
    "use strict";
    var Jogo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Jogo = class Jogo {
                constructor(_numero, _dezenas) {
                    this._numero = _numero;
                    this._dezenas = _dezenas;
                }
                get numero() {
                    return this._numero;
                }
                get dezenas() {
                    return this._dezenas;
                }
            };
            exports_1("Jogo", Jogo);
        }
    };
});
