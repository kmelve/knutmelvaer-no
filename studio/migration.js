// migration.js
/**
 * Run:
 * sanity exec --with-user-token migration.js
 *
 */
import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({ apiVersion: '2021-11-10' })
const id = "d87c525e-1d70-4eb3-99c1-10c395cbd3f9"
const email = "testing@foo.bar"

async function uniqueMailList(req, res) {
  const { email, id } = JSON.parse(req.body)
  // Get a list of comments, if list
  const emails = await client.fetch(`*[_type == "lesson" && _id == $id][0].likes[@ == $email]`, { email, id })

  if (emails.length === 0) {
    try {
      const res = await client
        //.transaction()
        .patch(id)
        .setIfMissing({ likes: [email] })
        .insert('after', `likes[-1]`, [email])
        .commit()
      return res
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Couldn\'t submit comment', err })
    }
  }
  else {
    return res.status(200).json({ message: 'Email has already liked' })
  }
  return res.status(200).json({ message: 'Comment submitted' })
}

uniqueMailList().then(res => console.log(JSON.stringify(res, null, 2)))