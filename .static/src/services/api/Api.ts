export abstract class Api {
  async execute(uri: string, sucesso: Function, erro: Function) {
    try {
      let response = await fetch(uri);
      let json = await response.json();
      sucesso(json);
    } catch (err) {
      erro(err);
    }
  }
}
