import React from "react";
import styles from "../../styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.top}>
        <code>{`{ top: 0; }`}</code>{" "}
      </h1>
      <h1 className={styles.top}>
        <code> or {`{ top: 10; }`}</code>
      </h1>
    </div>
  );
};

export default Landing;
