import img_5 from "../images/footer_img_5.png";
import styles from "./Footer.module.css";

import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"

function Footer() {
  return (
    <footer className={styles.footerDasPaginas}>
      <img
        onClick={() => {
          abrirlink("/");
        }}
        className={styles.footerMark}
        src={img_5}
      ></img>
      <div className={styles.logo}>
      <a
        href="https://www.youtube.com/prefeiturario"
        target="_blank"
        className={styles.footerLogo}
      >
        <FaYoutube size="40"/>
      </a>

      <a
        href="https://www.facebook.com/PrefeituradoRio"
        target="_blank"
        className={styles.footerLogo}
      >
        <FaFacebook size="40"/>
      </a>
        

      <a
        href="https://www.instagram.com/prefeitura_rio/"
        target="_blank"
        className={styles.footerLogo}
      >
        <FaInstagram size="40"/>
      </a>

      <a
        href="https://twitter.com/Prefeitura_Rio"
        target="_blank"
        className={styles.footerLogo}
      >
        <FaTwitter size="40"/>
      </a>
      </div>
    </footer>
  );
}

export default Footer;
