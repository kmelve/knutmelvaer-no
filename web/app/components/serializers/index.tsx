// import { Link } from "remix";
import Block from "./Block";
import Code from "./Code";
import Image from "./Image";
import TwitterEmbed from "./TwitterEmbed";
import YouTube from "./YouTube";
// import { getBlogUrl } from "../lib/helpers";
// import ReactTooltip from "react-tooltip";
/**
 * Remeber the RSS serializers too!
 */
const serializers: any = {
  //container: ({ children }: any) => <React.Fragment>{children}</React.Fragment>,
  types: {
    block: Block,
    // authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Image,
    code: Code,
    youtube: YouTube,
    twitter: TwitterEmbed,
    // youtube: YouTube,
  },
  marks: {
    internalLink: () => null,
    /* internalLink: ({ mark, children }) => {
      const { publishedAt, slug, _type } = mark.reference;
      if (_type == "post") {
        const path = getBlogUrl(publishedAt, slug);
        return <Link to={path}>{children}</Link>;
      }
      console.log("Unknown internal link type ", mark.reference);
      return <span>{children}</span>;
    }, */
  },
};

export default serializers;
