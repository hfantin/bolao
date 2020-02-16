System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, index_2, ResultadosController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            ResultadosController = class ResultadosController {
                constructor() {
                    this._resultado = new index_2.Resultado();
                    this._resultadosView = new index_1.ResultadosView("#resultadosView");
                    this.obterResultados();
                }
                obterResultados() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            let uri = `/resultados/1`;
                            let response = yield fetch(uri);
                            let json = yield response.json();
                            json.map(item => {
                                const lista = new Array();
                                lista.push(item.d1);
                                lista.push(item.d2);
                                lista.push(item.d3);
                                lista.push(item.d4);
                                lista.push(item.d5);
                                lista.push(item.d6);
                                this._resultado = new index_2.Resultado(item.jogo, item.data, lista);
                            });
                            this._resultadosView.update(this._resultado);
                        }
                        catch (err) {
                            console.log('erro: ', err);
                        }
                    });
                }
            };
            exports_1("ResultadosController", ResultadosController);
        }
    };
});
