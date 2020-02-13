System.register(["./controllers/jogoscontroller"], function (exports_1, context_1) {
    "use strict";
    var jogoscontroller_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jogoscontroller_1_1) {
                jogoscontroller_1 = jogoscontroller_1_1;
            }
        ],
        execute: function () {
            controller = new jogoscontroller_1.JogosController();
            $('.form').submit(controller.adiciona.bind(controller));
        }
    };
});
