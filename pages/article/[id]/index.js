import { useRouter } from "next/router";

export default function article({ article }) {
  //const router = useRouter();
  //const { id } = router.query;
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
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
