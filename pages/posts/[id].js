import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServerSideProps = async ({ params }) => {
  console.log(params);
  const matchedPost = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return {
    props: {
      post: matchedPost,
    },
  };
};

export default function Post({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
    </div>
  );
}
