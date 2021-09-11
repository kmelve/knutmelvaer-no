const client = require('../../utils/sanity')
const groq = require('groq')

async function posts() {
  const query = groq`*[_type == "post" && publishedAt < now() && slug.current != null]`
  const posts = await client.fetch(query)

  console.log(posts)
  return posts
}

 module.exports = posts
