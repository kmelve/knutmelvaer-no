const { format, isFuture, parseISO } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const isProd = process.env.NODE_ENV === 'production'


async function createCategoryPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
  {
    allSanityCategory(filter: {slug: {current: {ne: null}}}) {
      group(field: _id) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  }

  `)
  if (result.errors) throw result.errors

  const categoryEdges = result.data.allSanityCategory.group
  categoryEdges
    .forEach(({nodes}, index) => {
      const { id, slug = {} } = nodes[0]
      const path = `/category/${slug.current}`


      createPage({
        path,
        component: require.resolve('./src/templates/category.js'),
        context: {
          id
        }
      })
    })
}

async function createBlogPostPages (graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            hide
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
    // If it isn't prod return all posts, if it's prod, only return posts that's not hidden
    .filter(({node}) => isProd ? !node.hide : true)
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id, permalink: `https://www.knutmelvaer.no${path}` }
      })
    })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'SanityCategory') {
    createNodeField({
      node,
      name: 'posts',
      value: 'test'
  });
  }
};


exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createCategoryPages(graphql, actions, reporter)
}
