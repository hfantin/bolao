class Negociacao {
    constructor(_quantidade, _valor) {
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
