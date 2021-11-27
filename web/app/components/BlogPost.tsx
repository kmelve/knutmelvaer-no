import { Link } from "remix";
import { PortableText } from "~/components/PortableText";

interface Post {
  _id?: string;
  _type?: string;
  title?: string;
  slug?: {
    current?: string;
  };
  publishedAt?: string;
  body?: any;
}

export default function BlogPost({ post }: { post: Post }) {
  const { title, body, publishedAt } = post;
  return (
    <article className="prose">
      <aside>
        <div className="text-gray-500 text-sm">
          Published <time dateTime={publishedAt}>{publishedAt}</time>
        </div>
        {/* <div>Reading time</div>
        <h3>Author</h3>
        <h3>Categories</h3>
      <h3>Twitter / Webmentions</h3> */}
      </aside>
      <h1>{title}</h1>
      <PortableText blocks={body} />
      <Link to="/blog">Moar posts!</Link>
    </article>
  );
}
