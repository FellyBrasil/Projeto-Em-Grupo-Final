import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PainelCandidatos.module.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { progCariocas } from "../axios/config";

function PainelCandidatos() {
  const [candidatos, setCandidatos] = useState([]);

  const getCandidatos = async () => {
    try {
      const res = await progCariocas.get(`/candidatos/`);
      const data = res.data.data;
      setCandidatos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCandidatos();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Lista de candidatos</h2>
      <div className={styles.container}>
        <div className={styles.candidatos}>
          {candidatos.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            candidatos.map(candidato => (
              <Card
                className={styles.candidato}
                style={{ width: "18rem" }}
                key={candidato.cand_id}
              >
                <Card.Body>
                  <Card.Title>{candidato.cand_nome}</Card.Title>
                  <Card.Text className={styles.cardText}>
                    Cadastro: {candidato.data_cadastro}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    CPF: {candidato.cand_cpf}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Data de nascimento: {candidato.data_nascimento}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    E-mail: {candidato.cand_email}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Endereço: {candidato.cand_logradouro},{" "}
                    {candidato.cand_bairro} - {candidato.cand_cidade},{" "}
                    {candidato.cand_estado}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Complemento: {candidato.cand_complemento}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Número: {candidato.cand_numero}
                  </Card.Text>
                  <Button href="/painel/candidatos/editar/">Editar</Button>
                  <Button
                    variant="danger"
                    onClick={async () => {
                      await progCariocas.delete(
                        `/candidatos/${candidato.cand_id}`
                      );
                    }}
                  >
                    Excluir
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
        <Button
          href="/painel/"
          size="lg"
        >
          Voltar
        </Button>
      </div>
    </>
  );
}

export default PainelCandidatos;
