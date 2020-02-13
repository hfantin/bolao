import { JogosView, MensagemView } from '../views/index';
import { Jogos, Jogo, Mensagem } from '../models/index';

export class JogosController {
    private _inputQuantidade: JQuery;
    private _inputJogos: JQuery;
    private _jogos = new Jogos();
    private _jogosView = new JogosView("#jogosView");
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputQuantidade = $("#quantidade");
        this._inputJogos = $("#jogos");
        // atualiza a view para exibir os dados do modelo, vazio
        this._jogosView.update(this._jogos);
    }

    adiciona(evento: Event){
        event.preventDefault();
        this.obterNumeros(this._inputQuantidade.val(), this._inputJogos.val());
    }

    async obterNumeros(qtd, jogos) {
        try{
            let uri = `/numeros/${qtd}/jogos/${jogos}`;
            let response = await fetch(uri);
            let json = await response.json();
            this._jogos.clear();
            json.map(item => {
                const jogo = new Jogo(
                    item.jogo,
                    item.numeros
                )
                this._jogos.adiciona(jogo);
            });
            this._jogosView.update(this._jogos);
            this._mensagemView.update(new Mensagem('Numeros gerados com sucesso!', 'info'));
        } catch (err) {
            this._mensagemView.update(new Mensagem(`Falha ao gerar numeros: ${err}`, 'danger'));
        }
         
    }
}