import React, { useState, useEffect } from "react";
import { Container, Table, Spinner } from "react-bootstrap";
import { ResultadosService } from "../services/api/ResultadosService";
import Message from "../components/Message";

const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const service = new ResultadosService();

  useEffect(() => {
    setLoading(true);
    service.listar((lista: []) => tratarSucesso(lista), (err: any) => tratarErro(err) );
  }, []);


  const tratarSucesso = (lista: []) => {
    setLoading(false);
    setResultados(lista);
  };

  const tratarErro = (err: any) => {
    setLoading(false);
    setErro(`Falha ao listar resultados: ${err}`)
  };

  if(loading) {
    return ( 
    <>
      <br></br>
      <Spinner animation="border" />
    </>
    );
  }

  return (
    <Container>
      <br></br>
      <Message show={erro!==""} message={erro} />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Jogo</th>
            <th>Data</th>
            <th>Dezenas</th>
            <th>Ganhadores</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((item: any) => (
            <tr>
              <td>{item.jogo}</td>
              <td>{item.data}</td>
              <td>{item.dezenas.join(", ")}</td>
              <td>{item.ganhadores}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Resultados;
