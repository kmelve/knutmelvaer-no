import BlockContent from "@sanity/block-content-to-react";

const serializers = {};

export const PortableText = ({ blocks }: { blocks: any }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};
