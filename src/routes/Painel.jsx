import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Painel.module.css";

import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function Painel() {
  return (
    <div className={styles.container}>
      <p>Selecione a categoria que deseja manipular: </p>
      <Button
        className={styles.btnAdmin}
        variant="primary"
      >
        <Link to={"/paineis/candidatos/"}>Candidatos</Link>
      </Button>
      <Button
        className={styles.btnAdmin}
        variant="primary"
      >
        <Link to={"/paineis/zonas/"}>Zonas</Link>
      </Button>
      <Button
        className={styles.btnAdmin}
        variant="primary"
      >
        <Link to={"/paineis/polos/"}>Polos</Link>
      </Button>
    </div>
  );
}

export default Painel;
