import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
// const readingTime = require('reading-time');
import getReadTime from "../helpers/readTime";

function Post({ data, content }) {
  // console.log(typeof(JSON.stringify(content)));
  const readTime = getReadTime(JSON.stringify(content));
  return (
    <div>
      <h1 className="font-bold text-4xl mt-1 mb-3">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <div className="text-gray-500 italic">~ {readTime} minute read</div>
      <p className="prose mt-12">
        <MDXRemote {...content} />
      </p>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
