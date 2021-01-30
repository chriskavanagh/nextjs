import Head from "next/head";
import Link from "next/link";
import ArticleList from "../components/ArticleList";

//import useSWR from "swr";
//import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  //console.log(articles);

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
      <Link href="/ninjas/">
        <a>See Ninjas Listing</a>
      </Link>
      <style jsx>
        {`
          h1 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 4rem;
            font-family: "Potta";
          }
          a {
            color: #033d03;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
