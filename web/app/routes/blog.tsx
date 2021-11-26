import { Outlet, useLoaderData } from "remix";
import { sanityClient } from "~/lib/sanity/getClient";
import BlogPostPreview from "~/components/BlogPostPreview";
import { readableDate } from "~/lib/dateUtils";

export async function loader() {
  const posts = await sanityClient.fetch(`*[
    _type == "post"
    && slug.current != null
  ]|order(publishedAt desc)`);
  const preparedPosts = posts.map((post: any) => ({
    ...post,
    publishedAt: readableDate(post.publishedAt),
  }));
  return { posts: preparedPosts };
}

export default function Blog() {
  let { posts = [] } = useLoaderData();

  return (
    <main>
      <h1>Blog</h1>
      {posts.length > 0 && posts.map(BlogPostPreview)}
    </main>
  );
}
