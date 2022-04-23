import styles from "./styles.module.scss";
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.mediaSocial}>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaFacebookSquare />
        </div>
        <div>
          <FaWhatsapp />
        </div>
      </section>
      <section className={styles.developer}>
        <a href="https://rafaelreis.dev.br" target="_blank" rel="noreferrer">
          <p>Desenvolvido por Rafael Reis</p>
        </a>
      </section>
    </footer>
  );
}
