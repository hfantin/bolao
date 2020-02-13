import { Jogo } from './jogo';

export class Jogos {

    private _jogos: Array<Jogo> = [];

    adiciona(jogo: Jogo) {
        this._jogos.push(jogo);
    }

    paraArray(){
        return this._jogos;
    }

    clear() {
        this._jogos = [];
    }
}