import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditarPolos.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function EditarPolos() {
  return (
    <>
      <h2 className={styles.title}>Edite as informações do polo</h2>
      <Form className={styles.form}>
        <Row>
          <Form.Group
            as={Col}
            controlId="formGridNome"
          >
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Polo Santa Cruz"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridCnpj"
          >
            <Form.Label>CNPJ: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 12.345.678/0001-00"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="formGridPassword"
          >
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. (21) 8888-8888"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridEmail"
          >
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="ex. exemplo@email.com"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="formGridAbertura"
          >
            <Form.Label>Abertura: </Form.Label>
            <Form.Control
              type="time"
              placeholder="ex. 08:00"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridEncerramento"
          >
            <Form.Label>Encerramento: </Form.Label>
            <Form.Control
              type="time"
              placeholder="ex. 20:00"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="formGridLogradouro"
          >
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Rua Jabuticaba"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridNumero"
          >
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 1020"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridCidade"
          >
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Prédio Comercial"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group
            as={Col}
            controlId="formGridCep"
          >
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 11222-333"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridBairro"
          >
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Santa Cruz"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridCidade"
          >
            <Form.Label>Cidade: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Rio de Janeiro"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridEstado"
          >
            <Form.Label>Estado: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. RJ"
            />
          </Form.Group>
        </Row>

        <Button
          className={styles.btn}
          variant="primary"
          type="submit"
          size="lg"
          onClick={async () => {
            await progCariocas.put(`/polos/${polo.polo_id}`);
          }}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default EditarPolos;
