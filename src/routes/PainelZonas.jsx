import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PainelZonas.module.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { progCariocas } from "../axios/config";

function PainelZonas() {
  const [zonas, setZonas] = useState([]);

  const getZonas = async () => {
    try {
      const res = await progCariocas.get(`/painel/zonas`);
      const data = res.data.data;
      setZonas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getZonas();
  }, []);
  return (
    <>
      <h2 className={styles.title}>Lista de zonas</h2>
      <div className={styles.container}>
        <div className={styles.zonas}>
          {zonas.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            zonas.map(zona => (
              <Card
                className={styles.zona}
                style={{ width: "18rem" }}
                key={zona.zon_id}
              >
                <Card.Body>
                  <Card.Title>{zona.zon_nome}</Card.Title>
                  <Card.Text className={styles.cardText}>
                    Tipo: {zona.zon_tipo}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    ID Zona: {zona.zon_id}
                  </Card.Text>
                  <Button href="/painel/zonas/editar/">Editar</Button>
                  <Button
                    variant="danger"
                    onClick={async () => {
                      await progCariocas.delete(`/zonas/${zona.zon_id}`);
                    }}
                  >
                    Excluir
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
        <Button href="/painel/">Voltar</Button>
        <Button
          href="/painel/zonas/adicionar/"
          variant="success"
        >
          Adicionar
        </Button>
      </div>
    </>
  );
}

export default PainelZonas;
