import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AdicionarZonas.module.css";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


function AdicionarZonas() {
  return (
    <>
      <h2 className={styles.title}>Adicione uma zona</h2>
      <Form className={styles.form}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalNome"
        >
          <Form.Label
            column
            sm={2}
          >
            Nome:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="ex. Zona Oeste"
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group
            as={Row}
            className="mb-3"
          >
            <Form.Label
              as="legend"
              column
              sm={4}
            >
              Tipo:
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="radio"
                label="1"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="2"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="3"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group
          as={Row}
          className="mb-3"
        >
          <Col sm={{ span: 8, offset: 2 }}>
            <Button
              className={styles.btn}
              type="submit"
            >
              Enviar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}

export default AdicionarZonas;
