import BlockContent from "@sanity/block-content-to-react";
import { sanityClient } from "../lib/sanity/getClient";
import serializers from "./serializers/index";

export const PortableText = ({ blocks }: { blocks: any }) => {
  return (
    <BlockContent
      imageOptions={sanityClient}
      blocks={blocks}
      serializers={serializers}
    />
  );
};
