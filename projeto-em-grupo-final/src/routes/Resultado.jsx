import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Resultado.module.css";

import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import img1 from "../images/imagem4.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Resultado() {
  const baseUrl = "http://localhost:3000";
  const [resultado, setResultado] = useState([]);

  const getResultado = async () => {
    try {
      const res = await axios.get(`${baseUrl}/aprovados/`);
      const data = res.data.data;
      setResultado(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResultado();
  }, []);

  return (
    <>
      <h2 className={styles.title}>
        Esses são os aprovados para participar do projeto Programadores
        Cariocas.
      </h2>

      <img
        className={styles.imagem}
        src={img1}
        alt="Formatura Programadores Cariocas"
      />

      <ListGroup className={styles.aprovados}>
        {resultado.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          resultado.map(resultado => (
            <ListGroup.Item className={styles.aprovado}>
              {resultado.resul_colocacao}: {resultado.cand_nome} -{" "}
              {resultado.polo_nome}, {resultado.zon_nome}
            </ListGroup.Item>
          ))
        )}
      </ListGroup>

      <p className={styles.text}>
        Os respectivos polos entrarão em contato para realizar o cadastro dos
        alunos e também para informar o início das aulas.
      </p>
      <p className={styles.text}>
        Os 200 mais bem colocados ganham desconto de 100% para todo o curso, o
        restante dos 1.500 ganham 50% de desconto.
      </p>
    </>
  );
}

export default Resultado;
