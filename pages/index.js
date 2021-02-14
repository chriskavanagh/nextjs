import Head from "next/head";
import Link from "next/link";
import Auth from "../components/Auth";
//import ArticleList from "../components/ArticleList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Home</h1>
      <hr />
      <Link href="/articles">
        <a>
          <h3>Articles</h3>
        </a>
      </Link>
    </div>
  );
}
