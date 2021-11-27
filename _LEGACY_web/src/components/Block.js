import { Link } from 'remix'
import BlockContent from '@sanity/block-content-to-react'


const Block = props => {
  const { style = 'normal', _key } = props.node;

  if (/^h\d/.test(style)) {
    const HeadingTag = style;
    const headingId = `h${_key}`
    console.log(headingId)
    return (
      <HeadingTag id={headingId}>
        <span>{props.children}</span> <Link href={`#${headingId}`}>#</Link>
      </HeadingTag>
    );
  }

  if (style === 'blockquote') {
    return <blockquote>{props.children}</blockquote>
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

export default Block
