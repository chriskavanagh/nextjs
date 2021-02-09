import React from "react";
import Link from "next/link";
import styles from "../styles/Article.module.css";

export default function ArticleItem({ article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title.substring(0, 25)}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}
