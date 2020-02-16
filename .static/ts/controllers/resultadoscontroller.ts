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
                this._resultado = new Resultado(
                    item.jogo,
                    item.data, 
                    item.dezenas
                )
            });
            this._resultadosView.update(this._resultado);
        } catch (err) {
            console.log('erro: ', err);
        }
         
    }
}