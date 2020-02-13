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
    var index_1, index_2, JogosController;
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
            JogosController = class JogosController {
                constructor() {
                    this._jogos = new index_2.Jogos();
                    this._jogosView = new index_1.JogosView("#jogosView");
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputQuantidade = $("#quantidade");
                    this._inputJogos = $("#jogos");
                    this._jogosView.update(this._jogos);
                }
                adiciona(evento) {
                    event.preventDefault();
                    this.obterNumeros(this._inputQuantidade.val(), this._inputJogos.val());
                }
                obterNumeros(qtd, jogos) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            let uri = `/numeros/${qtd}/jogos/${jogos}`;
                            let response = yield fetch(uri);
                            let json = yield response.json();
                            this._jogos.clear();
                            json.map(item => {
                                const jogo = new index_2.Jogo(item.jogo, item.numeros);
                                this._jogos.adiciona(jogo);
                            });
                            this._jogosView.update(this._jogos);
                            this._mensagemView.update(new index_2.Mensagem('Numeros gerados com sucesso!', 'info'));
                        }
                        catch (err) {
                            this._mensagemView.update(new index_2.Mensagem(`Falha ao gerar numeros: ${err}`, 'danger'));
                        }
                    });
                }
            };
            exports_1("JogosController", JogosController);
        }
    };
});
