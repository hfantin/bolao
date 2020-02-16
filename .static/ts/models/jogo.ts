export class Jogo {

    constructor(private _numero: number,  private _dezenas: Array<number>) {}

    get numero() {
        return this._numero;
    }

    get dezenas() {
        return this._dezenas;
    }
}