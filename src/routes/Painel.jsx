import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Painel.module.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

function Painel() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h2 className={styles.title}>Seja bem vindo usuário!</h2>
      <div className={styles.container}>
        <p>Selecione a categoria que deseja manipular: </p>
        <div className={styles.cards}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Candidatos</Card.Title>
              <Card.Text className={styles.cardText}>
                Aqui será possível atualizar as informações de um candidato ou
                excluir um candidato da lista.
              </Card.Text>
              <Button href="/painel/candidatos/">Entrar</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Zonas</Card.Title>
              <Card.Text className={styles.cardText}>
                Cadastre uma nova zona, atualize as informações de uma zona ou
                exclua uma zona da lista.
              </Card.Text>
              <Button href="/painel/zonas/">Entrar</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Polos</Card.Title>
              <Card.Text className={styles.cardText}>
                Cadastre um novo polo vinculado a uma zona, atualize as
                informações ou exclua um polo da lista.
              </Card.Text>
              <Button href="/painel/polos/">Entrar</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Resultados</Card.Title>
              <Card.Text className={styles.cardText}>
                Cadastre um novo aprovado na lista, atualize as informações dele
                ou exclua-o da lista.
              </Card.Text>
              <Button href="/painel/resultados/">Entrar</Button>
            </Card.Body>
          </Card>
        </div>
        <Button
          className={styles.btnLogout}
          onClick={handleLogout}
          size="lg"
        >
          Fazer logout
        </Button>
      </div>
    </>
  );
}

export default Painel;
