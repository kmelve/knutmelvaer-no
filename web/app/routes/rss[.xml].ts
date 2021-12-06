import { Outlet, useLoaderData } from "remix";
import { Feed } from "feed";
import utf8 from "utf8";
import { sanityClient } from "~/lib/sanity/getClient";
import PortableText, { h } from "@sanity/block-content-to-html";
import { postsQuery } from "~/lib/queries/posts";
import { urlFor } from "~/lib/sanity/urlFor";
import { preparedPosts } from "~/lib/preparePost";

type Item = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
};

let PortableTextToXML = (blocks: any) =>
  PortableText({
    blocks,
    serializers: {
      marks: {
        internalLink: ({ mark, children }: { mark: any; children: any }) => {
          let { publishedAt, slug, _type } = mark.reference;
          if (_type == "post") {
            return h(
              "a",
              {
                href: `https://www.knutmelvaer.no/${slug}`,
              },
              children
            );
          }
          console.log("Unknown internal link type ", mark.reference);
          return h("span", {}, children);
        },
      },
      types: {
        authorReference: ({ node }: { node: any }) =>
          h("span", { innerHTML: node.author.name }),
        youtube: ({ node }: { node: any }) =>
          h(
            "p",
            {},
            h("a", {
              href: node.url,
              innerHTML: "Watch on Youtube.",
            })
          ),
        code: ({ node }: { node: any }) =>
          h("pre", h("code", { lang: node.language }, node.code)),
        mainImage: ({ node }: { node: any }) =>
          h("img", {
            src: urlFor(node.asset).url(),
          }),
        twitter: ({ node }: { node: any }) =>
          h(
            "p",
            {},
            h("a", {
              href: node.url,
              innerHTML: "Look at the tweet.",
            })
          ),
      },
    },
  });

export async function loader({ params }: { params: any }) {
  let posts = await sanityClient
    .fetch(postsQuery)
    .then((docs) => preparedPosts(docs, "https://www.knutmelvaer.no"))
    .then((posts) =>
      posts.map((post: any) => ({
        ...post,
        body: PortableTextToXML(post.body),
      }))
    );
  let feed = new Feed({
    title: "Knut Melvaer",
    description: "Knut Melvaer's blog",
    id: "https://www.knutmelvaer.no/rss.xml",
    link: "https://www.knutmelvaer.no",
    image: "https://www.knutmelvaer.no/logo.png",
    copyright: "Knut Melvaer",
    updated: new Date(posts[0].publishedAt),
    generator: "Remix",
    feedLinks: {
      json: "https://www.knutmelvaer.no/rss.json",
      atom: "https://www.knutmelvaer.no/rss.xml",
    },
  });
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `https://www.knutmelvaer.no/${post.slug}`,
      description: post.body,
      content: post.body,
      author: [{ name: post.authors[0].name }],
    });
  });
  let rssString = feed.rss2();

  return new Response(rssString, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
