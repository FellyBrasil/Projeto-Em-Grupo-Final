import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditarCandidatos.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Candidatos() {
  return (
    <Form>
      <Row>
        <Form.Group
          as={Col}
          controlId="formGridNome"
        >
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. José Pião"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridNascimento"
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
          controlId="formGridEmail"
        >
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="ex. exemplo@email.com"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridSenha"
        >
          <Form.Label>Senha: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
          />
        </Form.Group>
        <Form.Text>
          Sua senha deve conter pelo menos 8 caracteres, uma letra maiúscula,
          uma letra minúscula e um caracter especial.
        </Form.Text>
      </Row>

      <Row>
        <Form.Group
          as={Col}
          controlId="formGridTelefone"
        >
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. (21) 8888-8888"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridCelular"
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
          controlId="formGridCPF"
        >
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. 111.222.333-44"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridGenero"
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
          controlId="formGridRaca"
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
          controlId="formGridLogradouro"
        >
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. Rua das Aves"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridNumero"
        >
          <Form.Label>Número: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. 270"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridComplemento"
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
        variant="primary"
        type="submit"
        size="lg"
      >
        Enviar
      </Button>
    </Form>
  );
}

export default Candidatos;
