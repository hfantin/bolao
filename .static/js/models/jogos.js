System.register([], function (exports_1, context_1) {
    "use strict";
    var Jogos;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Jogos = class Jogos {
                constructor() {
                    this._jogos = [];
                }
                adiciona(jogo) {
                    this._jogos.push(jogo);
                }
                paraArray() {
                    return this._jogos;
                }
                clear() {
                    this._jogos = [];
                }
            };
            exports_1("Jogos", Jogos);
        }
    };
});
