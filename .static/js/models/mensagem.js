System.register([], function (exports_1, context_1) {
    "use strict";
    var Mensagem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Mensagem = class Mensagem {
                constructor(_texto, _tipo) {
                    this._texto = _texto;
                    this._tipo = _tipo;
                }
                get texto() {
                    return this._texto;
                }
                get tipo() {
                    return this._tipo;
                }
            };
            exports_1("Mensagem", Mensagem);
        }
    };
});
