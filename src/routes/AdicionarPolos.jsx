import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AdicionarPolos.module.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import * as Yup from "yup";
import { progCariocas } from "../axios/config";


const schema = Yup.object().shape({
  nome: Yup.string()
    .trim()
    .matches(/^[a-zA-Z]+(\s{0,2}[a-zA-Z]+)*$/, 'Nome deve conter apenas letras e espaços', {
      excludeEmptyString: true,
    })
    .required("Nome é obrigatório"),

  cnpj: Yup.string()
    .matches(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
      "CNPJ inválido. Use o formato xx.xxx.xxx/xxxx-xx"
    )
    .required("CNPJ é obrigatório"),
  telefone: Yup.string()
    .matches(/^\(\d{2}\) \d{4}\-\d{4}$/, "Telefone inválido. Use o formato (xx) xxxx-xxxx")
    .required("Telefone é obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .test('email-check', 'Endereço de e-mail inválido', function (value) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    })
    .required("Email é obrigatório"),
  abertura: Yup.string().required("A hora de abertura é obrigatória."),
  encerramento: Yup.string().required("A hora de encerramento é obrigatória."),
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
const AdicionarPolos = () => {
  // Cria o estado formData para controlar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    telefone: "",
    email: "",
    abertura: "",
    encerramento: "",
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
      await progCariocas.post("painel/polos", formData);
      // Define o estado isLoading para false para esconder o spinner
      setIsLoading(false);
      // Limpa os dados do formulário e os erros de validação
      setFormData({
        nome: "",
        cnpj: "",
        telefone: "",
        email: "",
        abertura: "",
        encerramento: "",
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
      <h2 className={styles.title}>Adicione um polo</h2>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Row>
          <Form.Group as={Col} controlId="formGridNome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Polo Santa Cruz"
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

          <Form.Group as={Col} controlId="formGridCnpj">
            <Form.Label>CNPJ: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. 12.345.678/0001-00"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.cnpj}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cnpj}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridTelefone">
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

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control
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
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridAbertura">
            <Form.Label>Horário de abertura: </Form.Label>
            <Form.Control
              type="time"
              placeholder="ex. "
              name="abertura"
              value={formData.abertura}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.abertura}
            />
            <Form.Control.Feedback type="invalid">
              {errors.abertura}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEncerramento">
            <Form.Label>Horário de encerramento: </Form.Label>
            <Form.Control
              type="time"
              name="encerramento"
              value={formData.encerramento}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.encerramento}
            />
            <Form.Control.Feedback type="invalid">
              {errors.encerramento}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formGridLogradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. Rua das Flores"
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

          <Form.Group as={Col} controlId="formGridNumero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
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

          <Form.Group as={Col} controlId="formComplemento">
            <Form.Label>Complemento</Form.Label>
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
        <Form.Group as={Col} controlId="formCep">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              placeholder="CEP"
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

          <Form.Group as={Col} controlId="formBairro">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bairro"
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

          <Form.Group as={Col} controlId="formCidade">
          <Form.Label>Cidade</Form.Label>
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

        <Form.Group as={Col} controlId="formEstado">
          <Form.Label>Estado</Form.Label>
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

export default AdicionarPolos;
