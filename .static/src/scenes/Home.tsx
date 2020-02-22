import React, { useState, useEffect } from "react";
import { Form, Button, Container, Table, Card, Spinner, Alert } from "react-bootstrap";

import { NumerosService, ResultadosService } from "../services/api";

const Home = () => {
  const [jogos, setJogos] = useState(1);
  const [dezenas, setDezenas] = useState(1);
  const [resultados, setResultados] = useState([]);
  const [erro, setErro] = useState("");
  const [ultimos, setUltimos] = useState({
    jogo: null,
    data: null,
    dezenas: []
  });
  const [loading, setLoading] = useState(true);
  const numerosService = new NumerosService();
  const resultadosService = new ResultadosService();

  useEffect(() => {
    resultadosService.getUltimo((r: any) => tratarUltimos(r), (e: any) => tratarErro(e));
  }, []);

  const tratarUltimos = (r: any) => {
    setUltimos(r);
    setLoading(false);
  };

  const tratarErro = (err: any) => {
    setErro(`Não foi possível obter os numeros: ${err}`);
    setLoading(false);
  };

  const consultar = (e: React.FormEvent) => {
    e.preventDefault();
    numerosService.listar(
      dezenas, jogos, 
      (r: any) => setResultados(r),
      (err: any) => setErro(`Não foi possível obter os numeros: ${err}`));
  };

  return (
    <Container>
      <br></br>
      {erro !== "" && (
        <Alert variant="danger" onClose={() => setErro("")} dismissible>
          <Alert.Heading>{erro}</Alert.Heading>
        </Alert>
      )}
      
      <Form>
        <Form.Group controlId="dezenas">
          <Form.Label>Quantidade de dezenas</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            max="13"
            min="1"
            defaultValue="1"
            onChange={(e: React.FormEvent) =>
              setDezenas(Number((e.target as HTMLInputElement).value))
            }
            required
          />
        </Form.Group>

        <Form.Group controlId="jogos">
          <Form.Label>Número de jogos</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            max="100"
            min="1"
            defaultValue="1"
            onChange={(e: React.FormEvent) =>
              setJogos(Number((e.target as HTMLInputElement).value))
            }
            required
          />
        </Form.Group>
        {/* btn-rounded btn-block my-4 waves-effect z-depth-0 
        
        btn btn-primary btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
        */}
        <Button variant="dark" type="submit" block onClick={consultar}>
          Gerar Dezenas
        </Button>
      </Form>

      <br></br>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Jogo</th>
            <th>Dezenas</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((item: any) => (
            <tr key={item.jogo}>
              <td>{item.jogo}</td>
              <td>{item.numeros.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br></br>
      <Card>
        <Card.Header>Último Resultado</Card.Header>
        <Card.Body>
          {loading ? (
            <Spinner animation="border" />
          ) : ultimos.jogo ? (
            <>
              <Card.Title>
                Concurso {ultimos.jogo} de {ultimos.data}
              </Card.Title>
              <Card.Text>{ultimos.dezenas.join(", ")}</Card.Text>
            </>
          ) : null}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
