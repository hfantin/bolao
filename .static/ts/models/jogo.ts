export class Jogo {

    constructor(private _numero: number,  private _dezenas: []) {}

    get numero() {
        return this._numero;
    }

    get dezenas() {
        return this._dezenas;
    }
}