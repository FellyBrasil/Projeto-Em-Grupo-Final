import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PainelPolos.module.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { progCariocas } from "../axios/config";

function PainelPolos() {
  const [polos, setPolos] = useState([]);

  const getPolos = async () => {
    try {
      const res = await progCariocas.get(`/polos/`);
      const data = res.data.data;
      setPolos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPolos();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Lista de polos</h2>
      <div className={styles.container}>
        <div className={styles.polos}>
          {polos.length === 0 ? (
            <Spinner animation="border" />
          ) : (
            polos.map(polo => (
              <Card
                className={styles.polo}
                style={{ width: "18rem" }}
                key={polo.pol_id}
              >
                <Card.Body>
                  <Card.Title>{polo.polo_nome}</Card.Title>
                  <Card.Text className={styles.cardText}>
                    CNPJ: {polo.polo_cnpj}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Telefone: {polo.polo_telefone}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    E-mail: {polo.polo_email}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Endereço: {polo.polo_logradouro}, {polo.polo_bairro} -{" "}
                    {polo.polo_cidade}, {polo.polo_estado}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    Número: {polo.polo_numero}
                  </Card.Text>
                  <Card.Text className={styles.cardText}>
                    ID Zona: {polo.zon_id}
                  </Card.Text>
                  <Button href="/painel/polos/editar/">Editar</Button>
                  <Button
                    variant="danger"
                    onClick={async () => {
                      await progCariocas.delete(`/polos/${polo.polo_id}`);
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
          href="/painel/polos/adicionar/"
          variant="success"
        >
          Adicionar
        </Button>
      </div>
    </>
  );
}

export default PainelPolos;
