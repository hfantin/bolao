System.register(["./jogo", "./jogos", "./resultado", "./mensagem"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (jogo_1_1) {
                exportStar_1(jogo_1_1);
            },
            function (jogos_1_1) {
                exportStar_1(jogos_1_1);
            },
            function (resultado_1_1) {
                exportStar_1(resultado_1_1);
            },
            function (mensagem_1_1) {
                exportStar_1(mensagem_1_1);
            }
        ],
        execute: function () {
        }
    };
});
