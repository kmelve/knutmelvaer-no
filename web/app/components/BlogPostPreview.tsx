import { Link } from "remix";
import { urlFor } from "~/lib/sanity/urlFor";
import { PortableText } from "~/lib/sanity/PortableText";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

type Slug = {
  current: string;
};
interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: Slug;
  excerpt?: unknown;
  mainImage?: SanityImageObject;
}

export default function BlogPostPreview(props: BlogPost) {
  const { _id, title, publishedAt, slug, excerpt, mainImage } = props;

  return (
    <Link
      key={_id}
      to={`blog/${slug.current}`}
      className="flex flex-col md:flex-row p-2"
    >
      <div className="w-full md:w-4/12 rounded overflow-hidden mb-6">
        {mainImage && (
          <img
            src={urlFor(mainImage).width(600).height(400).auto("format").url()}
          />
        )}
      </div>
      <div className="w-full md:w-8/12 mt-4 md:mt-0 md:ml-4">
        <h2 className="leading-none font-black text-xl md:text-2xl">{title}</h2>
        <small className="font-grey">{publishedAt}</small>
        <PortableText blocks={excerpt} />
      </div>
    </Link>
  );
}
