System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends view_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>JOGO</th>
                    <th>NUMEROS</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(jogo => `
                <tr>
                    <td>${jogo.numero}</td>
                    <td>${jogo.dezenas}</td>
                </tr>
                `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
