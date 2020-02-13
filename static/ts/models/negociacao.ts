class Negociacao {



    constructor(private _quantidade: number,  private _valor: number) {}

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}