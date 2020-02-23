import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

import { ResultadosService } from "../services/api/ResultadosService";
import Message from "../components/Message";

const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState("");
  const service = new ResultadosService();

  useEffect(() => {
    service.listar((lista: any) => setResultados(lista), (err: any) => setErro(`Falha ao listar resultados: ${err}`) );
  }, []);

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
