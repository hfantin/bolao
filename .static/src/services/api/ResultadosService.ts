import { Api } from "./Api";

export class ResultadosService extends Api {
  listar(sucesso: Function, erro: Function) {
    return super.execute("/resultados", sucesso, erro);
  }

  getUltimo(sucesso: Function, erro: Function) {
    return super.execute("/resultados/ultimo", sucesso, erro);
  }
}
