import { readableDate, slugDate } from "~/lib/dateUtils";
import { BlogPost } from "~/components/BlogPostPreview";

/**
 *
 * @param posts An array of posts
 * @param root To generate the correct slug, we need the root path
 * @returns The prepared posts with readable date and the dated slug
 */

export const preparedPosts = (posts: [BlogPost], root?: string) =>
  posts.map((post: any) => ({
    ...post,
    slug: `${root && root + "/"}${slugDate(post?.publishedAt)}/${
      post.slug?.current
    }`,
    publishedAt: readableDate(post.publishedAt),
  }));
