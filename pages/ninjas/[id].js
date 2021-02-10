import React from "react";
import styles from "../../styles/Details.module.css";

export default function Details({ ninja }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <span className={styles.pro}>PRO</span>
        <img
          className={styles.round}
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3 className={styles.name}>{ninja.name}</h3>
        <h4 className={styles.txt}>{ninja.address.city}</h4>
        <p className={[styles.txt, styles.para].join(" ")}>
          User interface designer and <br /> front-end developer
        </p>
        <div class="buttons">
          <button className={styles.primary}>Message</button>
          <button className={styles.ghost}>Following</button>
        </div>
        <div class="skills">
          <div className={styles.userData}>
            <h4 className={styles.txt}>{ninja.email}</h4>
            <h4 className={styles.txtBtm}>{ninja.website}</h4>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};
