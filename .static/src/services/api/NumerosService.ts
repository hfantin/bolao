import { Api } from "./Api";

export class NumerosService extends Api {
  listar(dezenas: number, jogos: number, sucesso: Function, erro: Function) {
    return super.execute(`/numeros/${dezenas}/jogos/${jogos}`, sucesso, erro);
  }
}
