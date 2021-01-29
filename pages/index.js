import Head from "next/head";
import Link from "next/link";
//import Navbar from "../components/Navbar";
//import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Homepage</h1>
      <Link href="/ninjas/">
        <a>See Ninjas Listing</a>
      </Link>
    </div>
  );
}
