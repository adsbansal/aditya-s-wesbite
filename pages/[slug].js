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
    <div className=""> 
    {/* someday center this */}
      <h1 className="font-bold text-slate-300 text-4xl mt-6 mb-3">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <div className="text-gray-500 italic">less than {readTime} min</div>
      <p className="prose prose-invert text-slate-300 mt-6 mb-20">
        {/* change the inbuilt prose class to add somemore vibrancy */}
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
