import PortableText from "@sanity/block-content-to-react";

export default function Block(props: any) {
  const { style = "normal", _key } = props.node;

  if (/^h\d/.test(style)) {
    const HeadingTag = style;
    const headingId = `h${_key}`;
    return (
      <HeadingTag id={headingId} className="group flex whitespace-pre-wrap">
        <a
          href={`#${headingId}`}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute after:hash opacity-0 group-hover:opacity-100"
          style={{
            marginLeft: "-1em",
            paddingRight: "0.5em",
            boxShadow: "none",
            color: "rgb(161, 161, 170)",
          }}
        >
          #
        </a>
        <span>{props.children}</span>
      </HeadingTag>
    );
  }

  if (style === "blockquote") {
    return <blockquote>{props.children}</blockquote>;
  }

  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props);
}
