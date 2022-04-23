import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>
        Apaixonados
        <span>por</span>
        café
      </h2>
    </header>
  );
}
