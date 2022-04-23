import styles from "./styles.module.scss";

export default function Banner() {
  return (
    <main className={styles.container}>
      <h1>Black friday</h1>
      <p>
        Fique ligado na única promoção que fazemos no ano!
        <br />
        Vale a pena esperar por isso!
      </p>

      <h2>Você sabe qual a diferença entre café comum e café Gourmet?</h2>
    </main>
  );
}
