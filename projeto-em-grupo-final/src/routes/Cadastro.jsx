import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cadastro.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Cadastro() {
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    // Password must have at least 8 characters, with at least one uppercase letter, one lowercase letter, one number and one special character
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!regex.test(password)) {
      return false;
    }
    return true;
  }

  function validarTelefone(telefone) {
    const regex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
    return regex.test(telefone);
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf == "") return false;
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    )
      return false;
    // Valida 1o digito
    add = 0;
    for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
  }

  function validateGender(gender) {
    // Array of possible values for gender
    const genders = ["Masculino", "Feminino", "Transgênero", "Não-binário"];
    if (!genders.includes(gender.toLowerCase())) {
      return false;
    }
    return true;
  }

  function validateRace(race) {
    // Array of possible values for race
    const races = ["Branco", "Preto", "Amarelo", "Pardo", "Indígena"];
    if (!races.includes(race.toLowerCase())) {
      return false;
    }
    return true;
  }

  function validarLogradouro(logradouro) {
    // Verifica se o logradouro possui somente letras, números e espaços
    const logradouroRegex = /^[a-zA-Z0-9À-ÿ\s]*$/;
    return logradouroRegex.test(logradouro);
  }

  function validarNumero(numero) {
    // Verifica se o número possui somente números
    const numeroRegex = /^[0-9]*$/;
    return numeroRegex.test(numero);
  }

  function validarComplemento(complemento) {
    // Verifica se o complemento possui somente letras, números e espaços
    const complementoRegex = /^[a-zA-Z0-9À-ÿ\s]*$/;
    return complementoRegex.test(complemento);
  }

  function validarCep(cep) {
    // Verifica se o CEP possui exatamente 8 números
    const cepRegex = /^[0-9]{8}$/;
    return cepRegex.test(cep);
  }

  function validarBairro(bairro) {
    // Verifica se o bairro possui somente letras, números e espaços
    const bairroRegex = /^[a-zA-Z0-9À-ÿ\s]*$/;
    return bairroRegex.test(bairro);
  }

  function validarCidade(cidade) {
    // Verifica se a cidade possui somente letras e espaços
    const cidadeRegex = /^[a-zA-ZÀ-ÿ\s]*$/;
    return cidadeRegex.test(cidade);
  }

  function validarEstado(estado) {
    // Verifica se o estado possui duas letras maiúsculas
    const estadoRegex = /^[A-Z]{2}$/;
    return estadoRegex.test(estado);
  }
  return (
    <>
      <h2 className={styles.title}>Faça seu cadastro!</h2>
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
        >
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default Cadastro;
