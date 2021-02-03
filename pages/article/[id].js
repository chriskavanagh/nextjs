//import { useRouter } from "next/router";
import styles from "../../styles/Article.module.css";
import Link from "next/link";

export default function article({ article }) {
  /* const router = useRouter();
  console.log(router);
  const { id } = router.query;
  console.log(id); */
  return (
    <div className={styles.card}>
      <h1>{article.title}</h1>
      <h2>{article.id}</h2>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
