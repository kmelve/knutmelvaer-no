import { Link } from "@remix-run/react";
import BlockContent, {
  SerializerTypes,
  BlockContentProps,
} from "@sanity/block-content-to-react";
import { useContext, useEffect, useState } from "react";
import { HeadingContext } from "./HeadingContext";

const serializers: SerializerTypes<BlockContentProps> = (current: string) => ({
  types: {
    block: (props: any) => {
      let { node, children } = props;
      let { style, _key, listItem } = node;
      if (style.startsWith("h") && !listItem) {
        let level: number = Number(style.substring(1));
        let link = `h${_key}`;
        let headingClass = level > 2 ? "ml-4 text-sm" : "";
        let currentClass = current === link ? "text-blue-500" : "";
        let className = `mb-2 ${headingClass} ${currentClass}`;

        /* Links starts with `h` to avoid that the id starts with a digit bug */
        return (
          <li className={className}>
            <Link id={link} className="toc-link" to={"#" + link}>
              {children}
            </Link>
          </li>
        );
      }
      return null;
    },
  },
});

type BlockType = {
  _type: string;
  style: string;
};

type TableOfContentsProps = {
  blocks: [BlockType];
};

export default function TableOfContents(props: TableOfContentsProps) {
  let [current, setCurrent] = useState("");
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let id = entry.target.id;
          const el = document.querySelector(`a#${id}`);
          if (entry.intersectionRatio > 0.8) {
            if (el) {
              el.classList.add("text-blue-500");
            }
          } else {
            if (el) {
              el.classList.remove("text-blue-500");
            }
          }
        });
      },
      {
        //root: document.querySelector("article"),
        threshold: [0, 0.8],
        //rootMargin: "0% 0% -100% 0%",
      }
    );
    document.querySelectorAll(".heading").forEach((section) => {
      observer.observe(section);
    });
  }, []);
  let { blocks } = props;
  const onlyParagraphBlocks = blocks.filter(
    ({ _type, style = "" }: BlockType) =>
      _type === "block" && style.startsWith("h")
  );
  if (onlyParagraphBlocks.length > 0) {
    return (
      <nav className="p-4 bg-gray-100 rounded sticky top-6 max-h-screen overflow-auto">
        <h3 className="text-xs mb-4">Table of contents</h3>
        <ul>
          <BlockContent
            blocks={onlyParagraphBlocks}
            serializers={serializers(current)}
          />
        </ul>
      </nav>
    );
  }
  return null;
}
