import { View } from './view';
import { Resultado } from '../models/index';

export  class ResultadosView extends View<Resultado>{

    template(model: Resultado): string {
        return `
        <div>
            <p style="font-weight: bold">Último Resultado:</p> 
            <p>${model.jogo} - ${model.data} - ${model.dezenas}</p>
            <br/>
            <br/>
        </div>
        `;
    }
}