import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PainelResultados.module.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { progCariocas } from "../axios/config";

function PainelResultados() {
  const [resultados, setResultados] = useState([]);

  const getResultados = async () => {
    try {
      const res = await progCariocas.get(`/aprovados/`);
      const data = res.data.data;
      setResultados(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResultados();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Lista de aprovados</h2>
      <div className={styles.container}>
        <div className={styles.resultados}>
          {resultados.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            resultados.map(resultado => (
              <Card
                className={styles.resultado}
                style={{ width: "18rem" }}
                key={resultado.resul_id}
              >
                <Card.Body>
                  <Card.Title>{resultado.cand_nome}</Card.Title>
                  <Card.Text className={styles.cardText}>
                    Colocação: {resultado.resul_colocacao}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Zona: {resultado.zon_nome}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Polo: {resultado.polo_nome}
                  </Card.Text>

                  <Button href="/painel/resultados/editar/">Editar</Button>
                  <Button
                    variant="danger"
                    onClick={async () => {
                      await progCariocas.delete(
                        `/aprovados/${resultado.cand_id}`
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

        <Button
          href="/painel/resultados/adicionar/"
          variant="success"
        >
          Adicionar
        </Button>
      </div>
    </>
  );
}

export default PainelResultados;
