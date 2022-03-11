import React, { useState, useEffect } from "react";
import { Container, Table, Spinner, Button } from "react-bootstrap";
import { ResultadosService } from "../services/api/ResultadosService";
import Message from "../components/Message";

const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({text: "", type: ""});
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
    setMessage({text: `Falha ao listar resultados: ${err}`, type: 'danger' })
  };

  const atualizar = () => {
    console.log('em construcao');
    setMessage({text: `em construcao`, type: 'info' })
  }

  if(loading) {
    return ( 
    <>
      <br></br>
      <Spinner animation="border"/>
    </>
    );
  }

  return (
    <Container>
      <br></br>
      <Message show={message.text !== ""} message={message.text} type="danger" />

      <Button variant="dark" type="submit" block onClick={atualizar}>
          Atualizar
      </Button>

      <br></br>

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
          {resultados?.map((item: any) => (
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