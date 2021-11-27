import { Link } from "remix";
import { urlFor } from "~/lib/sanity/urlFor";
import { PortableText } from "~/components/PortableText";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: string;
  excerpt?: unknown;
  mainImage?: SanityImageObject;
}

export default function BlogPostPreview(props: BlogPost) {
  const { _id, title, publishedAt, slug, excerpt, mainImage } = props;

  return (
    <Link
      key={_id}
      to={`${slug}`}
      className={`flex flex-col md:flex-row max-w-2xl mb-6
      bg-gray-100 rounded p-4 hover:bg-gray-200
      transition-shadow duration-200 hover:shadow`}
    >
      <div className="w-full md:w-10/12">
        <small className="font-grey">{publishedAt}</small>
        <h2 className="leading-none font-black md:text-xl mb-2">{title}</h2>
        <PortableText blocks={excerpt} />
      </div>
    </Link>
  );
}