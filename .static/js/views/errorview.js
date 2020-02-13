System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, ErrorView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            ErrorView = class ErrorView extends view_1.View {
                template(model) {
                    return `<p class="alert alert-error">${model}</p>`;
                }
            };
            exports_1("ErrorView", ErrorView);
        }
    };
});
