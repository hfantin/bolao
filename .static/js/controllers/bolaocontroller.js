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
    var index_1, index_2, BolaoController;
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
            BolaoController = class BolaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(evento) {
                    event.preventDefault();
                    this.obterNumeros(this._inputQuantidade.val(), this._inputValor.val());
                }
                obterNumeros(qtd, jogos) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            let uri = `/numeros/${qtd}/jogos/${jogos}`;
                            let response = yield fetch(uri);
                            let json = yield response.json();
                            this._negociacoes.clear();
                            json.map(item => {
                                const negociacao = new index_2.Negociacao(item.jogo, item.numeros);
                                this._negociacoes.adiciona(negociacao);
                                console.log('negociacao ', negociacao);
                            });
                            this._negociacoesView.update(this._negociacoes);
                            this._mensagemView.update('Numeros gerados com sucesso!');
                        }
                        catch (err) {
                            console.log('erro: ', err);
                            this._mensagemView.update('falha ao gerar numeros...');
                        }
                    });
                }
            };
            exports_1("BolaoController", BolaoController);
        }
    };
});
