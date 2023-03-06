import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Cadastro.module.css";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const schema = Yup.object().shape({

  nome: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]+(\s{0,2}[a-zA-Z]+)*$/, 'Nome deve conter apenas letras e espaços', {
      excludeEmptyString: true,
    })
    .required("Nome é obrigatório"),

  nascimento: Yup.string()
    .matches(
      /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Data de nascimento inválida. Use o formato dd/mm/aaaa."
    ),

  email: Yup.string()
    .email("Email inválido")
    .test('email-check', 'Endereço de e-mail inválido', function (value) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required("Email é obrigatório"),

  senha: Yup.string()
    .min(8, "Senha deve conter pelo menos 8 caracteres")
    .matches(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
    .matches(/[@$!%*?&]/, "Senha deve conter pelo menos um caracter especial")
    .required("Senha é obrigatória"),

  telefone: Yup.string()
    .trim()
    .matches(
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      "Telefone inválido. Use o formato (xx) xxxxx-xxxx"
    )
    .required("Telefone é obrigatório"),

  celular: Yup.string()
    .trim()
    .matches(
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      "Celular inválido. Use o formato (xx) xxxxx-xxxx"
    )
    .required("Celular é obrigatório"),

  cpf: Yup.string()
    .trim()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido")
    .test("cpf-valido", "CPF inválido", (value) => cpf.isValid(value))
    .required("CPF é obrigatório"),

  genero: Yup.string()
    .oneOf(['masculino', 'feminino', 'não-binário', 'outro'], "Gênero inválido")
    .nullable(),

  raca: Yup.string()
    .oneOf(['branca', 'preta', 'parda', 'amarela', 'indígena', 'outra'], "Raça inválida")
    .nullable(),

  logradouro: Yup.string().required("O logradouro é obrigatório."),

  numero: Yup.string()
    .matches(/^\d+|s\/n$/, "Número inválido.")
    .required("O número é obrigatório."),
  complemento: Yup.string().notOneOf([' ', '  ', '   ']).nullable().default(null),

  cep: Yup.string().required("O CEP é obrigatório."),

  bairro: Yup.string().required("O bairro é obrigatório."),

  cidade: Yup.string().required("A cidade é obrigatória."),

  estado: Yup.string().required("O estado é obrigatório."),

});

// Define o estado inicial para todos os campos do formulário
const Cadastro = () => {
  // Cria o estado formData para controlar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    nascimento: "",
    email: "",
    senha: "",
    telefone: "",
    celular: "",
    cpf: "",
    genero: "",
    raca: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  // Cria o estado errors para controlar os erros de validação
  const [errors, setErrors] = useState({});

  // Cria o estado isLoading para controlar o envio do formulário
  const [isLoading, setIsLoading] = useState(false);

  // Atualiza o estado formData sempre que um campo do formulário é alterado
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Valida o campo que acabou de perder o foco
  const handleBlur = async (e) => {
    const fieldName = e.target.name;
    try {
      // Verifica se o campo é válido de acordo com o schema definido
      await Yup.reach(schema, fieldName).validate(e.target.value);
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: null }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: err.message }));
    }
  };

  // Envia os dados do formulário para a API

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verifica se todos os campos são válidos de acordo com o schema definido
      await schema.validate(formData, { abortEarly: false });
      // Define o estado isLoading para true para mostrar o spinner
      setIsLoading(true);
      // Envia os dados do formulário para a API
      await progCariocas.post("/", formData);
      // Define o estado isLoading para false para esconder o spinner
      setIsLoading(false);
      // Limpa os dados do formulário e os erros de validação
      setFormData({
        nome: "",
        nascimento: "",
        email: "",
        senha: "",
        telefone: "",
        celular: "",
        cpf: "",
        genero: "",
        raca: "",
        logradouro: "",
        numero: "",
        complemento: "",
        cep: "",
        bairro: "",
        cidade: "",
        estado: "",
      });
      setErrors({});
    } catch (err) {
      // Define o estado isLoading para false para esconder o spinner
      setIsLoading(false);
      // Verifica se o erro é uma validação do Yup
      if (err instanceof Yup.ValidationError) {
        // Cria um objeto com os erros de validação
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        // Se o erro não for uma validação do Yup, exibe uma mensagem genérica
        alert("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
      }
    }
  };
  return (
    <>
      <h2 className={styles.title}>Faça seu cadastro!</h2>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Row>

          <Form.Group as={Col} controlId="Nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. José Pião"
              name="nome"
              value={formData.nome} // Valor atual do campo de input
              onChange={handleChange} // Função que será executada quando o valor do campo mudar
              onBlur={handleBlur} // Função que será executada quando o campo perder o foco
              isInvalid={!!errors.nome} // Propriedade que indica se o campo está inválido ou não
            />
            <Form.Control.Feedback type="invalid">
              {errors.nome}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Nascimento">
            <Form.Label>Data de nascimento: </Form.Label>
            <Form.Control
              type="date"
              name="nascimento"
              placeholder="ex. 01/01/2023"
              value={formData.nascimento}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.nascimento}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nascimento}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-1">
          <Form.Group as={Col} controlId="Email">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              placeholder="ex. exemplo@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Senha">
            <Form.Label>Senha: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.senha}
            />
            <Form.Control.Feedback type="invalid">
              {errors.senha}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="Telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. (21) 8888-8888"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.telefone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.telefone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Celular">
            <Form.Label>Celular: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. (21) 99999-9999"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.celular}
            />
            <Form.Control.Feedback type="invalid">
              {errors.celular}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 123.456.789-10"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.cpf}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cpf}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Genero">
            <Form.Label>Gênero: </Form.Label>
            <Form.Control
              as="select"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.genero}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="naobinario">Não binário</option>
              <option value="outror">Outro</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.genero}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Raca">
            <Form.Label>Raça: </Form.Label>
            <Form.Control as="select" name="raca"
              value={formData.raca}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.raca}
            >
              <option value="">Selecione</option>
              <option value="branca">Branca</option>
              <option value="preta">Preta</option>
              <option value="parda">Parda</option>
              <option value="amarela">Amarela</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.raca}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="Logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Rua das Aves"
              name="logradouro"
              value={formData.logradouro}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.logradouro}
            />
            <Form.Control.Feedback type="invalid">
              {errors.logradouro}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Numero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 123"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.numero}
            />
            <Form.Control.Feedback type="invalid">
              {errors.numero}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="Complemento"
          >
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.complemento}
            />
            <Form.Control.Feedback type="invalid">
              {errors.complemento}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="Cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              placeholder="11222-333"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.cep}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cep}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Santa Cruz"
              name="bairro"
              value={formData.bairro}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.bairro}
            />
            <Form.Control.Feedback type="invalid">
              {errors.bairro}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Cidade">
            <Form.Label>Cidade: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.cidade}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cidade}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Estado">
            <Form.Label>Estado: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.estado}
            />
            <Form.Control.Feedback type="invalid">
              {errors.estado}
            </Form.Control.Feedback>
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
