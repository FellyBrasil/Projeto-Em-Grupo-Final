import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PainelZonas.module.css";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function PainelPolos() {
  return (
    <div>
      <p>Polo 1</p>
      <Button variant="primary">
        <Link to={"/paineis/polos/editar"}>Editar</Link>
      </Button>
      <Button variant="primary">Excluir</Button>

      <Button>
        <Link to={"/paineis/polos/adicionar"}>Adicionar</Link>
      </Button>
    </div>
  );
}

export default PainelPolos;
