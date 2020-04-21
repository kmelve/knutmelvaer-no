import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import css from './Block.module.css'

const Block = props => {
  const {style = 'normal', _key} = props.node;

  if (/^h\d/.test(style)) {
    const HeadingTag = style;
    return (
      <HeadingTag id={_key}>
        <a className={css.headingtag} href={`#${_key}`}>#</a> <span className={css.heading}>{props.children}</span>
      </HeadingTag>
    );
  }

  if (style === 'blockquote') {
    return <blockquote className={css.blockquote}>{props.children}</blockquote>
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

export default Block
