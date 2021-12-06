import { Link } from "remix";
import { PortableText } from "~/components/PortableText";
import { urlFor } from "~/lib/sanity/urlFor";
import TableOfContents from "./TableOfContents";

interface Post {
  _id?: string;
  _type?: string;
  title?: string;
  slug?: {
    current?: string;
  };
  publishedAt?: string;
  body?: any;
  mainImage?: any;
}

export default function BlogPost({ post }: { post: Post }) {
  const { title, body, publishedAt, mainImage } = post;
  return (
    <>
      <figure>
        <img
          className="w-full rounded-sm mb-10"
          src={urlFor(post.mainImage)
            .height(350)
            .width(900)
            .auto("format")
            .url()}
          alt={post.mainImage.alt}
        />
      </figure>
      <div className="flex flex-col md:flex-row">
        <article className="prose mr-20 w-full md:w-8/12">
          <h1>{title}</h1>
          <PortableText blocks={body} />
          <Link to="/">Moar posts!</Link>
        </article>
        <aside className="pt-28 w-4/12">
          <div className="p-4 bg-gray-100 rounded mb-4">
            <div className="text-sm">
              Published <time dateTime={publishedAt}>{publishedAt}</time>
              {/* <div>Reading time</div>
            <h3>Author</h3>
            <h3>Categories</h3>
            <h3>Twitter / Webmentions</h3> */}
            </div>
          </div>
          <TableOfContents blocks={body} />
        </aside>
      </div>
    </>
  );
}
