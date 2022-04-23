import styles from "./styles.module.scss";

export default function Cards() {
  return (
    <section>
      <ul className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3>Qual a diferença entre café comum e o Gourmet?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ex, reiciendis illum, excepturi, dolores vero repellat
              impedit soluta ipsa atque labore accusamus quo. Cum facilis culpa
              dignissimos tempore repellat ducimus eius fuga deserunt laudantium
              neque?
            </p>
          </div>
        </div>
        <li className={styles.card}>
          <div className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3>Qual a diferença entre café comum e o Gourmet?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ex, reiciendis illum, excepturi, dolores vero repellat
              impedit soluta ipsa atque labore accusamus quo. Cum facilis culpa
              dignissimos tempore repellat ducimus eius fuga deserunt laudantium
              neque?
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3>Qual a diferença entre café comum e o Gourmet?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ex, reiciendis illum, excepturi, dolores vero repellat
              impedit soluta ipsa atque labore accusamus quo. Cum facilis culpa
              dignissimos tempore repellat ducimus eius fuga deserunt laudantium
              neque?
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <div className={styles.cardIcon} />
          <div className={styles.cardContent}>
            <h3>Qual a diferença entre café comum e o Gourmet?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ex, reiciendis illum, excepturi, dolores vero repellat
              impedit soluta ipsa atque labore accusamus quo. Cum facilis culpa
              dignissimos tempore repellat ducimus eius fuga deserunt laudantium
              neque?
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
