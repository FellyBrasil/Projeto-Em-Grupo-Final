import img_1 from "../images/header_img_1.png";
import img_2 from "../images/footer_img_5.png"
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const abrirlink = useNavigate();

  return (
    // <header className={styles.headerDasPaginas}>
    //   <img
    //     onClick={() => {
    //       abrirlink("/");
    //     }}
    //     className={styles.headerLogo}
    //     src={img_1}
    //   ></img>
    //   <nav className={styles.headerBotoesDeNavegacao}>
    //     <button
    //       onClick={() => {
    //         abrirlink("/");
    //       }}
    //       className={styles.headerButton}
    //     >
    //       HOME
    //     </button>
    //     <button
    //       onClick={() => {
    //         abrirlink("/polos");
    //       }}
    //       className={styles.headerButton}
    //     >
    //       POLOS
    //     </button>
    //     <button
    //       onClick={() => {
    //         abrirlink("/aprovados");
    //       }}
    //       className={styles.headerButton}
    //     >
    //       APROVADOS
    //     </button>
    //     <button
    //       onClick={() => {
    //         abrirlink("/login");
    //       }}
    //       className={styles.headerButton}
    //     >
    //       LOGIN
    //     </button>
    //     <button
    //       onClick={() => {
    //         abrirlink("/cadastro");
    //       }}
    //       className={styles.headerButton}
    //     >
    //       CADASTRO
    //     </button>
    //   </nav>
    // </header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home"><img className={styles.headerLogo} src={img_2}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/resultado">Aprovados</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastro">
              Cadastro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
