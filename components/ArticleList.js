import Head from "next/head";
import ArticleItem from "./ArticleItem";
import styles from "../styles/Article.module.css";

export default function ArticleList({ articles }) {
  return (
    <>
      <Head>
        <title>Articles</title>
        <meta name="keywords" content="articles" />
      </Head>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </div>
    </>
  );
}
