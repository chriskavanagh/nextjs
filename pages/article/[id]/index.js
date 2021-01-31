import { useRouter } from "next/router";
import Link from "next/link";

export default function article({ article }) {
  //const router = useRouter();
  //const { id } = router.query;
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
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
