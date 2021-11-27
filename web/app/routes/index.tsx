import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import BlogPostPreview from "~/components/BlogPostPreview";
import { BlogPost } from "~/components/BlogPostPreview";
import { preparedPosts } from "~/lib/preparePost";
import { indexQuery } from "~/lib/queries";
import { sanityClient } from "~/lib/sanity/getClient";
import { urlFor } from "~/lib/sanity/urlFor";

type IndexData = {
  siteSettings: {
    title: string;
    description: string;
    keywords: [string];
    author: {
      name: string;
      image: {
        asset: {
          _ref: string;
          _type: string;
        };
      };
    };
  };
  posts: [BlogPost];
  resources: Array<{ name: string; url: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const { siteSettings, posts } = await sanityClient.fetch(indexQuery);
  return {
    siteSettings,
    posts: preparedPosts(posts, "blog"),
  };
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Knut Melvær",
    description: "The personal blog.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let { siteSettings, posts } = useLoaderData<IndexData>();
  const { title, description, keywords, author } = siteSettings;
  return (
    <div className="flex flex-wrap">
      <main className="w-full sm:w-8/12 lg:w-9/12">
        {posts.length > 0 && posts.map(BlogPostPreview)}
        <div className="flex flex-row space-x-6">
          <div className="">
            {author?.image && (
              <img
                src={urlFor(author?.image).width(200).url()}
                className="rounded-full"
              />
            )}
          </div>
          <div className="md:w-10/12">
            <h2>{title}</h2>
            <p className="prose">{description}</p>
          </div>
        </div>
      </main>
      <aside className="w-full sm:w-4/12 lg:w-3/12">
        <h2>Links</h2>
        <ul>
          {/* {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))} */}
        </ul>
      </aside>
    </div>
  );
}
