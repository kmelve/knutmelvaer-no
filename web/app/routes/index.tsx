import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { Link } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import BlogPostPreview from "~/components/BlogPostPreview";
import type { BlogPost } from "~/components/BlogPostPreview";
import ResourceItem from "~/components/ResourceItem";

import { preparedPosts } from "~/lib/preparePost";
import { indexQuery } from "~/lib/queries";
import { sanityClient } from "~/lib/sanity/getClient";
import { urlFor } from "~/lib/sanity/urlFor";

export type Link = {
  _key: string;
  text: string;
  link: {
    href: string;
  };
};

export type InternalLink = {
  _key: string;
  text: string;
  slug: {
    current: string;
  };
};

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
    resources: Array<Link>;
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
  const { title, description, keywords, author, resources } = siteSettings;
  return (
    <div className="flex flex-wrap px-4 md:px-0">
      <div className="p-4 mb-8 bg-blue-100 rounded-md dark:bg-blue-900 md:w-7/12">
        <p>{description}</p>
      </div>
      <main className="w-full pr-6 sm:w-9/12 lg:w-8/12">
        <div className="mb-4 prose dark:prose-invert">
          <h3 className="font-bold">Written things</h3>
        </div>
        {posts.length > 0 && posts.map(BlogPostPreview)}
      </main>
      <aside className="w-full sm:w-3/12 lg:w-2/12">
        <div className="prose dark:prose-invert">
          <h3 className="my-0">Links</h3>
          <ul>{resources?.length > 0 && resources.map(ResourceItem)}</ul>
        </div>
      </aside>
    </div>
  );
}
