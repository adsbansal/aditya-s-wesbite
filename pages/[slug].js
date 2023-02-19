import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
// const readingTime = require('reading-time');
import getReadTime from "../helpers/readTime";
import FadeIn from 'react-fade-in';


function Post({ data, content }) {
  // console.log(typeof(JSON.stringify(content)));
  const readTime = getReadTime(JSON.stringify(content));
  return (
    <div className="sm:px-16 sm:mx-16"> 
    {/* someday center this */}
      <FadeIn transitionDuration={600} delay={80}>
        <h1 className="font-bold text-teal-200 text-4xl mt-16 mb-3">{data.title}</h1>
        <time className="text-gray-200 italic">· {data.date}</time>
        <div className="text-gray-200 italic">~ less than {readTime} min</div>
        <p className="
        prose prose-invert 
        prose-headings:text-teal-200
        prose-blockquote:text-amber-500
        hover:prose-a:text-teal-200
        prose-code:text-green-400
        mt-6 mb-20
        ">
          {/* change the inbuilt prose class to add somemore vibrancy */}
          {console.log(content)}
          <MDXRemote {...content} />
        </p>
      </FadeIn>
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


// on getting confused on what to do and being stuck
// on winning the telangana