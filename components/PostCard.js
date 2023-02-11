import Link from "next/link";

function PostCard({ title, date, description, slug }) {

  return (
    // <div className="my-4 py-4 border-b">
    //   <h2 className="font-bold text-2xl my-4">{title}</h2>
    //   <time className="text-gray-400">{date}</time>
    //   <p className="mt-4 italic">{description}</p>

    //   <Link href="/[slug]" as={`/${slug}`}>
    //     <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
    //   </Link>
    // </div>
    <div className="text-slate-300 px-1 mx-1">
      <h3 className="font text-base my-4">
        → 
        <Link href="/[slug]" as={`/${slug}`}>
          <a className="ml-2 hover:underline">{title}</a>
        </Link>
        {/* <div className="italic text-gray-600"></div> */}
      </h3> 
    </div>
  );
}

export default PostCard;
