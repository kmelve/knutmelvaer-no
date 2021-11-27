import { Link } from "remix";
import BlockContent from "@sanity/block-content-to-react";

const serializers = {
  types: {
    block: (props: any) => {
      const { node } = props;
      const { style, _key, listItem } = node;
      if (style.startsWith("h") && !listItem) {
        let level = style.substring(1);

        return (
          <li className="mb-2 text-sm">
            <Link to={`#h${_key}`} className={level > 2 ? " mr-4" : ""}>
              {props.children}
            </Link>
          </li>
        );
      }
      return null;
    },
  },
};

export default function TableOfContents(props: any) {
  const { blocks } = props;
  const onlyBlocks = blocks.filter(
    ({ _type, style = "" }: { _type: string; style: string }) =>
      _type === "block" && style.startsWith("h")
  );
  if (onlyBlocks.length === 0) {
    return null;
  }
  return (
    <nav className="p-4 bg-gray-100 rounded sticky top-6">
      <h3 className="text-xs mb-4">Table of contents</h3>
      <ul>
        <BlockContent blocks={onlyBlocks} serializers={serializers} />
      </ul>
    </nav>
  );
}
