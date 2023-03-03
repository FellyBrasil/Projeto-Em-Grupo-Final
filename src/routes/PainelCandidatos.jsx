import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PainelCandidatos.module.css";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function PainelCandidatos() {
  return (
    <div>
      <p>Candidato 1</p>
      <Button variant="primary">
        <Link to={"/paineis/candidatos/editar"}>Editar</Link>
      </Button>
      <Button variant="primary">Excluir</Button>
    </div>
  );
}

export default PainelCandidatos;
