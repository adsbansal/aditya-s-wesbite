import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Words({ posts }) {
  return (
    <div>
      <h1 className="mt-6 mb-5 text-slate-300 font-semibold text-4xl underline">blogs and learnings.</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};