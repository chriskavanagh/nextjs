import React from "react";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

export default function Ninjas({ ninjas }) {
  console.log(ninjas);
  return (
    <div>
      <h1>All Ninjas!</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

/* export default function Ninjas({ ninjas }) {
  console.log(ninjas);
  let ninjaMen = [];
  for (let i = 0; i < ninjas.length; i++) {
    ninjaMen.push(<div key={i}>{ninjas[i].name}</div>);
  }
  return (
    <div>
      <h1>All Ninjas!</h1>
      <h3>{ninjaMen}</h3>
    </div>
  );
} */
