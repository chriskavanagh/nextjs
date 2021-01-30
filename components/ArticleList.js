import ArticleItem from "./ArticleItem";
import styles from "../styles/Article.module.css";

export default function ArticleList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
}
