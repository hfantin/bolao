System.register(["./view", "./mensagemview", "./jogosview", "./resultadosview"], function (exports_1, context_1) {
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
            function (view_1_1) {
                exportStar_1(view_1_1);
            },
            function (mensagemview_1_1) {
                exportStar_1(mensagemview_1_1);
            },
            function (jogosview_1_1) {
                exportStar_1(jogosview_1_1);
            },
            function (resultadosview_1_1) {
                exportStar_1(resultadosview_1_1);
            }
        ],
        execute: function () {
        }
    };
});
