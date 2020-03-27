import React from 'react'
import { Link } from 'gatsby'
import Figure from './Figure'
import Code from './code'
import TwitterEmbed from './twitterEmbed'
import { getBlogUrl } from '../lib/helpers'
import YouTube from './youtube'
import ReactTooltip from 'react-tooltip'

/**
 * Remeber the RSS serializers too!
 */
const serializers = {
  container: ({ children }) => <React.Fragment>{children}</React.Fragment>,
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code,
    twitter: TwitterEmbed,
    youtube: YouTube
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { publishedAt, slug, _type } = mark.reference
      if (_type == 'post') {
        const path = getBlogUrl(publishedAt, slug)
        return <Link to={path}>{children}</Link>
      }
      console.log('Unknown internal link type ', mark.reference)
      return <span>{children}</span>
    }
  }
}

export default serializers
