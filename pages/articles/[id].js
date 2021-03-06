import Link from "next/link";
import styles from "../../styles/Article.module.css";

export default function article({ article }) {
  return (
    <article className={styles.card}>
      <h1>{article.title}</h1>
      <h2>{article.id}</h2>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </article>
  );
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((article) => {
    return {
      params: {
        id: article.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
