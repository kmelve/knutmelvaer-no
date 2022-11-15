import { Outlet, useLoaderData } from "@remix-run/react";
import { sanityClient } from "~/lib/sanity/getClient";
import BlogPostPreview from "~/components/BlogPostPreview";

import { postsQuery } from "~/lib/queries/posts";
import { preparedPosts } from "~/lib/preparePost";
export async function loader() {
  const posts = await sanityClient.fetch(postsQuery);

  return { posts: preparedPosts(posts) };
}

export default function Blog() {
  let { posts = [] } = useLoaderData();

  return (
    <main>
      <h2 className="mb-4 text-xl font-black leading-none dark:font-white md:text-2xl">
        Posts
      </h2>
      {posts.length > 0 && posts.map(BlogPostPreview)}
    </main>
  );
}
