import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AdicionarPolos.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import * as Yup from "yup";

function AdicionarPolos() {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [abertura, setAbertura] = useState("");
  const [encerramento, setEncerramento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const schema = Yup.object().shape({
    nome: Yup.string().required(),
    cnpj: Yup.string()
      .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
      .required(),
    telefone: Yup.string()
      .matches(/^\(\d{2}\) \d{4}\-\d{4}$/)
      .required(),
    email: Yup.string().email().required(),
    abertura: Yup.string().required(),
    encerramento: Yup.string().required(),
    logradouro: Yup.string().required(),
    numero: Yup.string().required(),
    complemento: Yup.string().required(),
    cep: Yup.string()
      .matches(/^\d{5}\-\d{3}$/)
      .required(),
    bairro: Yup.string().required(),
    cidade: Yup.string().required(),
    estado: Yup.string().required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(
        {
          nome,
          cnpj,
          telefone,
          email,
          abertura,
          encerramento,
          logradouro,
          numero,
          complemento,
          cep,
          bairro,
          cidade,
          estado,
        },
        { abortEarly: false }
      );
      console.log("Dados válidos!");
    } catch (err) {
      console.error(err.errors);
    }
  };

  return (

    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. Polo Santa Cruz"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCnpj">
          <Form.Label>CNPJ: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. 12.345.678/0001-00"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. (21) 8888-8888"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={abertura}
            onChange={(e) => setAbertura(e.target.value)}
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
            value={encerramento}
            onChange={(e) => setEncerramento(e.target.value)}
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
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
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
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="formGridComplemento"
        >
          <Form.Label>Complemento: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. Prédio Comercial"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
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
            value={cep}
            onChange={(e) => setCep(e.target.value)}
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
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
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
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
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
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
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

export default AdicionarPolos;
