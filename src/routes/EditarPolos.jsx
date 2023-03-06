import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EditarPolos.module.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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

const EditarPolos = () => {
  const { id } = useParams();
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
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPolo = async () => {
      try {
        const response = await progCariocas.get(`painel/polos/editar/${id}`);
        setFormData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPolo();
  }, [id]);

  // restante do código do componente

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = async (e) => {
    const fieldName = e.target.name;
    try {
      await Yup.reach(schema, fieldName).validate(e.target.value);
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: null }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: err.message }));
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
  
    try {
      await schema.validate(formData, { abortEarly: false });
      setIsLoading(true);
  
      await progCariocas.put(`painel/polos/editar/${id}`, formData);
        
      setIsLoading(false);
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
      setIsLoading(false);
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <>
      <h2 className={styles.title}>Edite as informações do polo</h2>
      <Form onSubmit={handleEdit} className={styles.form}>
        <Row>
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            placeholder="ex. Polo Santa Cruz"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.nome}
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

export default EditarPolos;
