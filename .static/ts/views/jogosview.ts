import { View } from './view';
import { Jogos } from '../models/index';

export  class JogosView extends View<Jogos>{

    template(model: Jogos): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>JOGO</th>
                    <th>NUMEROS</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(jogo => 
                `
                <tr>
                    <td>${jogo.numero}</td>
                    <td>${jogo.dezenas.map(d => ` ${d}`)}</td>
                </tr>
                `
            ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}