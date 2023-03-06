import logo_rio from "../images/logo_rio.png";
import styles from "./Footer.module.css";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        onClick={() => {
          abrirlink("/");
        }}
        className={styles.footerMark}
        src={logo_rio}
      ></img>
      <div className={styles.logos}>
        <a
          href="https://www.youtube.com/prefeiturario"
          target="_blank"
          className={styles.footerLogo}
        >
          <FaYoutube size="40" />
        </a>

        <a
          href="https://www.facebook.com/PrefeituradoRio"
          target="_blank"
          className={styles.footerLogo}
        >
          <FaFacebook size="40" />
        </a>

        <a
          href="https://www.instagram.com/prefeitura_rio/"
          target="_blank"
          className={styles.footerLogo}
        >
          <FaInstagram size="40" />
        </a>

        <a
          href="https://twitter.com/Prefeitura_Rio"
          target="_blank"
          className={styles.footerLogo}
        >
          <FaTwitter size="40" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
