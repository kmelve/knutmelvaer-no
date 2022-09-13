import { useLoaderData } from "@remix-run/react";
import { sanityClient } from "~/lib/sanity/getClient";
import BlogPost from "~/components/BlogPost";
import { slugDate, readableDate } from "~/lib/dateUtils";
export async function loader({ params }: any) {
  const { slug } = params;

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  return {
    post: {
      ...post,
      ...post,
      slug: `${slugDate(post?.publishedAt)}/${post.slug?.current}`,
      publishedAt: readableDate(post.publishedAt),
    },
  };
}

export default function Post() {
  const { post } = useLoaderData();
  return <BlogPost post={post} />;
}
