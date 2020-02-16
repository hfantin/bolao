System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, controller, rcontroller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            controller = new index_1.JogosController();
            rcontroller = new index_1.ResultadosController();
            $('.form').submit(controller.adiciona.bind(controller));
        }
    };
});
