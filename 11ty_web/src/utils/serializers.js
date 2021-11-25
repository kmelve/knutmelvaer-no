const imageUrl = require('./imageUrl')
const PortableText = require('@sanity/block-content-to-html')
const h = PortableText.h
// Learn more on https://www.sanity.io/guides/introduction-to-portable-text


module.exports = {
    types: {
        authorReference: ({ node }) => `[${node.name}](/authors/${node.slug.current})`,
        code: ({ node }) => `\`\`\`${node.language}\n${node.code}\n\`\`\``,
        mainImage: ({ node }) => `![${node.alt}](${imageUrl(node).width(600).url()})`,
        twitter: ({ node }) => node.url,
        authorReference: ({ node }) => h('span', { innerHTML: node.author.name }),
        youtube: ({ node }) => node.url
    },
    marks: {
        internalLink: ({ node }) => `<pre>${JSON.stringify(node, null, 2)}</pre>`
    }
}