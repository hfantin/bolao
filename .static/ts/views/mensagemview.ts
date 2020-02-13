import { View } from './view';
import { Mensagem } from '../models/index';

export class MensagemView extends View<Mensagem>{

    template(model: Mensagem): string {
        return `<p class="alert alert-${model.tipo}">${model.texto}</p>`;
    }
}