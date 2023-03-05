import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditarResultados.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AdicionarResultados() {
  return (
    <>
      <h2 className={styles.title}>Adicione um aprovado</h2>
      <Form className={styles.form}>
        <Row>
          <Form.Group
            as={Col}
            controlId="IdCand"
          >
            <Form.Label>ID do Cantidato: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 1"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Nota"
          >
            <Form.Label>Nota: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 10.0"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="Cota"
          >
            <Form.Label>Cota: </Form.Label>
            <Form.Select defaultValue="Escolha">
              <option>Escolha</option>
              <option>Sim</option>
              <option>Não</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Colocacao"
          >
            <Form.Label>Colocação: </Form.Label>
            <Form.Control
              type="password"
              placeholder="1"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group
            as={Col}
            controlId="Resultado"
          >
            <Form.Label>Resultado: </Form.Label>
            <Form.Select defaultValue="Escolha">
              <option>Escolha</option>
              <option>Aprovado</option>
              <option>Reprovado</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="IdZona"
          >
            <Form.Label>ID da Zona: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 1"
            />
          </Form.Group>
        </Row>

        <Button
          className={styles.btn}
          variant="primary"
          type="submit"
          size="lg"
          onClick={async () => {
            await progCariocas.put(`/aprovados/${resultado.cand_id}`);
          }}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default AdicionarResultados;
