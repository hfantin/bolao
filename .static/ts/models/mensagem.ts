export class Mensagem {

    constructor(private _texto: string,  private _tipo: string) {}

    get texto() {
        return this._texto;
    }

    get tipo() {
        return this._tipo;
    }
}