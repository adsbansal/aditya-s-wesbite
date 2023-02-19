import Link from "next/link";

function PostCard({ title, date, description, tags, slug }) {

  return (
    <div className="my-4 py-4 border-slate-600 border-b text-slate-300">
      <div className="font text-base my-1 mt-5">
        → 
        <Link href="/[slug]" as={`/${slug}`}>
          <a className="ml-2 text-xl font-bold hover:underline hover:text-teal-200">{title}</a> 
        </Link>
        &nbsp; ·  <time className="text-sm">{date}</time>
        {/* {console.log(tags)} */}
        <p className="mt-2 italic">{description} · <span className="text-sm text-amber-500">{'#' + tags.join(' #')}</span></p>
      </div> 
    </div>
  );
}

export default PostCard;
