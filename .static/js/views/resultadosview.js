System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, ResultadosView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            ResultadosView = class ResultadosView extends view_1.View {
                template(model) {
                    return `
        <div>
            <p style="font-weight: bold">Último Resultado:</p> 
            <p>${model.jogo} - ${model.data} - ${model.dezenas}</p>
            <br/>
            <br/>
        </div>
        `;
                }
            };
            exports_1("ResultadosView", ResultadosView);
        }
    };
});
