import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditarCandidatos.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function EditarCandidatos() {
  return (
    <>
      <h2 className={styles.title}>Edite as informações do candidato</h2>
      <Form className={styles.form}>
        <Row>
          <Form.Group
            as={Col}
            controlId="Nome"
          >
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. José Pião"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Nascimento"
          >
            <Form.Label>Data de nascimento: </Form.Label>
            <Form.Control
              type="date"
              placeholder="ex. 01/01/2023"
            />
          </Form.Group>
        </Row>

        <Row className="mb-1">
          <Form.Group
            as={Col}
            controlId="Email"
          >
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="ex. exemplo@email.com"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Senha"
          >
            <Form.Label>Senha: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
            />
          </Form.Group>
          <Form.Text className={styles.text}>
            Sua senha deve conter pelo menos 8 caracteres, uma letra maiúscula,
            uma letra minúscula e um caracter especial.
          </Form.Text>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="Telefone"
          >
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. (21) 8888-8888"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Celular"
          >
            <Form.Label>Celular: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. (21) 99999-9999"
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="Cpf"
          >
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 111.222.333-44"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Genero"
          >
            <Form.Label>Gênero: </Form.Label>
            <Form.Select defaultValue="Escolha">
              <option>Escolha</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Transgênero</option>
              <option>Não-binário</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Raca"
          >
            <Form.Label>Raça: </Form.Label>
            <Form.Select defaultValue="Escolha">
              <option>Escolha</option>
              <option>Branco</option>
              <option>Preto</option>
              <option>Amarelo</option>
              <option>Pardo</option>
              <option>Indígena</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            controlId="Logradouro"
          >
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Rua das Aves"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Numero"
          >
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 270"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Complemento"
          >
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Fundos"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group
            as={Col}
            controlId="Cep"
          >
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 11222-333"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Bairro"
          >
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Santa Cruz"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Cidade"
          >
            <Form.Label>Cidade: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Rio de Janeiro"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Estado"
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
            await progCariocas.put(`/candidatos/${candidato.cand_id}`);
          }}
        >
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default EditarCandidatos;
