import { urlFor } from "~/lib/sanity/urlFor";

export default function Image({ node }: { node: any }) {
  const { asset, alt, caption, credit, url } = node;
  return <img src={urlFor(asset).url()} />;
}
