import React, {useState, useEffect} from "react";
import { Form, Button, Container, Table, Card, Spinner } from "react-bootstrap";

const Home = () => {

  const [jogos, setJogos] = useState(1);
  const [dezenas, setDezenas] = useState(1);
  const [resultados, setResultados] = useState([]);
  const [ultimos, setUltimos] = useState({jogo: null, data: null, dezenas: []});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    executarServicoUltimos();
  }, [])

  const consultar = (e: React.FormEvent) => {
    e.preventDefault();
    executarServico();
  }

  const executarServicoUltimos = async () => {
    try{
      setLoading(true);
      console.log(`consulta ultimos resultados`);
      let uri = `/resultados/ultimo`;
      let response = await fetch(uri);
      let ultimosNumeros = await response.json();
      setUltimos(ultimosNumeros);
    } catch (err) {
        console.log(`Falha ao obter resultado: ${err}`);
    } finally {
      setLoading(false);
    }
  }

  const executarServico = async () => {
    try{
      let uri = `/numeros/${dezenas}/jogos/${jogos}`;
      let response = await fetch(uri);
      let lista = await response.json();
      setResultados(lista);
    } catch (err) {
        console.log(`Falha ao gerar numeros: ${err}`);
    }
  }
  
  return (
    <Container>
      <Form>
        <Form.Group controlId="dezenas">
          <Form.Label>Quantidade de dezenas</Form.Label>
          <Form.Control
            type="number"
            placeholder=""
            max="13"
            min="1"
            defaultValue="1"
            onChange={(e: React.FormEvent) => setDezenas(Number((e.target as HTMLInputElement).value))}
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
            onChange={(e: React.FormEvent) => setJogos(Number((e.target as HTMLInputElement).value))}
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
          { resultados.map((item: any) => (
            <tr>
              <td>{item.jogo}</td>
              <td>{item.numeros.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br></br>
      <Card>
        <Card.Header>Último Resultado</Card.Header>
        <Card.Body>
          { loading ? 
            <Spinner animation="border" /> : 
            ultimos.jogo ?
          ( 
            <>
              <Card.Title>Concurso {ultimos.jogo} de {ultimos.data}</Card.Title>
             <Card.Text>{ultimos.dezenas.join(', ')}</Card.Text>
           </>
          ): null }
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
