import { Link } from "remix";
import { useMemo } from "react";
import { PortableText } from "~/components/PortableText";
import { urlFor } from "~/lib/sanity/urlFor";
import TableOfContents from "./TableOfContents";

type PostType = {
  post: {
    _id?: string;
    _type?: string;
    title?: string;
    slug?: {
      current?: string;
    };
    publishedAt?: string;
    body?: any;
    mainImage?: any;
  };
};

export default function BlogPost({ post }: PostType) {
  const { title, body, publishedAt, mainImage } = post;

  const sectionizedBody = useMemo(() => {
    body.reduce((acc: any, item: any) => {
      if (/^h\d/.test(item.style)) {
      } else {
        /* if (acc.length > 0) {
          acc[acc.length - 1].content.push(item);
        } */
      }
      return acc;
    }, []);
  }, [body]);

  return (
    <>
      <figure className="filter grayscale contrast-100">
        <img
          className="w-full mb-10 rounded-sm"
          src={urlFor(mainImage).height(350).width(900).auto("format").url()}
          alt={mainImage.alt}
        />
      </figure>

      <div className="flex flex-col md:flex-row">
        <article className="w-full mr-20 prose md:w-8/12">
          <h1>{title}</h1>
          <PortableText blocks={body} />
          <Link to="/">Moar posts!</Link>
        </article>
        <aside className="w-4/12 pt-28">
          <div className="p-4 mb-4 bg-gray-100 rounded">
            <div className="text-sm">
              Published <time dateTime={publishedAt}>{publishedAt}</time>
              {/*
                  <div>Reading time</div>
                  <h3>Author</h3>
                  <h3>Categories</h3>
                  <h3>Twitter / Webmentions</h3>
              */}
            </div>
          </div>
          <TableOfContents blocks={body} />
        </aside>
      </div>
    </>
  );
}
