class NegociacaoController {
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(evento: Event){
        event.preventDefault();
        this.obterNumeros(this._inputQuantidade.val(), this._inputValor.val());
    }

    async obterNumeros(qtd, jogos) {
        try{
            let uri = `/numeros/${qtd}/jogos/${jogos}`;
            let response = await fetch(uri);
            let json = await response.json();
            this._negociacoes.clear();
            json.map(item => {
                const negociacao = new Negociacao(
                    item.jogo,
                    item.numeros
                )
                this._negociacoes.adiciona(negociacao);
                console.log('negociacao ', negociacao);
            });
            this._negociacoesView.update(this._negociacoes);
            this._mensagemView.update('Numeros gerados com sucesso!');
        } catch (err) {
            console.log('erro: ', err);
            this._mensagemView.update('falha ao gerar numeros...');
        }
         
    }
}