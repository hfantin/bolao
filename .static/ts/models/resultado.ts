export class Resultado {

    constructor(private _jogo?: number,  private _data?: string, private _dezenas?: Array<number>) {}

    get jogo() {
        return this._jogo;
    }

    get data() {
        return this._data;
    }

    get dezenas() {
        return this._dezenas;
    }
}