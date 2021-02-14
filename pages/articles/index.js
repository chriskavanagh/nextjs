import Head from "next/head";
//import Link from "next/link";
//import Auth from "../../components/Auth";
import styles from "../../styles/Article.module.css";
import ArticleItem from "../../components/ArticleItem";

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=16`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default function Articles({ articles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="keywords" content="articles" />
      </Head>
      <main className={styles.container}>
        {articles.map((article, index) => (
          <ArticleItem article={article} key={index} />
        ))}
      </main>
      <style jsx>
        {`
          h3 {
            color: #521b49;
          }
        `}
      </style>
    </>
  );
}

/* export default function Articles({ articles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="keywords" content="articles" />
      </Head>
      <main className={styles.container}>
        {articles.map((article, index) => (
          <Link href={`/articles/${article.id}`} key={index}>
            <a>
              <h3>{article.title.substring(0, 25)}</h3>
              <p>{article.body}</p>
            </a>
          </Link>
        ))}
      </main>
      <style jsx>
        {`
          h3 {
            color: #521b49;
          }
        `}
      </style>
    </>
  );
} */
