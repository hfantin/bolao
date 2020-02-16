import { ResultadosView } from '../views/index';
import { Resultado } from '../models/index';

export class ResultadosController {
    private _resultado = new Resultado();
    private _resultadosView = new ResultadosView("#resultadosView");

    constructor() {
        this.obterResultados();
    }

    async obterResultados() {
        try{
            let uri = `/resultados/1`;
            let response = await fetch(uri);
            let json = await response.json();
            json.map(item => {
                const lista = new Array<number>();
                lista.push(item.d1)
                lista.push(item.d2)
                lista.push(item.d3)
                lista.push(item.d4)
                lista.push(item.d5)
                lista.push(item.d6)
                this._resultado = new Resultado(
                    item.jogo,
                    item.data, 
                    lista
                )
            });
            this._resultadosView.update(this._resultado);
        } catch (err) {
            console.log('erro: ', err);
        }
         
    }
}