import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStaticProps = async () => {
  const posts = await prisma.post.findMany();
  return {
    props: {
      posts,
    },
  };
};

export default function Posts({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  );
}
