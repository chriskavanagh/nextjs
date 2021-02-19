import styles from "../../styles/Grid.module.css";

export default function Grid() {
  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nesciunt ullam itaque! Consequuntur, asperiores modi!
        </p>
        <span className={styles.span}>John Doe</span>
      </div>
      <div className={styles.quote}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nesciunt ullam itaque! Consequuntur, asperiores modi!
        </p>
        <span className={styles.span}>John Doe</span>
      </div>
      <div className={styles.quote}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nesciunt ullam itaque! Consequuntur, asperiores modi!
        </p>
        <span className={styles.span}>John Doe</span>
      </div>
      <div className={styles.quote}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nesciunt ullam itaque! Consequuntur, asperiores modi!
        </p>
        <span className={styles.span}>John Doe</span>
      </div>
    </div>
  );
}
