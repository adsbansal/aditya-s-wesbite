import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";
import FadeIn from 'react-fade-in';

export default function Words({ posts }) {
  return (
    <div className="sm:px-16 sm:mx-16">
      <FadeIn transitionDuration={600} delay={80}>
        <h1 className="mt-10 mb-5 text-slate-300 font-semibold text-4xl underline">blogs and learnings.</h1>
      </FadeIn>
      <FadeIn transitionDuration={600} delay={60}>
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
          />
        ))}
      </FadeIn>
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