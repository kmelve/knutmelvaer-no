/**
 * This script can be placed in the root of your studio folder,
 * and be run with `sanity exec deleteDocsWithoutSchema.js --with-user-credentials
 */
import client from 'part:@sanity/base/client'
const getSanitySchema = require('./node_modules/@sanity/core/lib/actions/graphql/getSanitySchema')

const Schema = getSanitySchema(process.cwd())
const types = Schema._original.types.map(({name}) => name)

// Check which documents that currently haven't a corresponding schema in the studio
client.fetch('*[!(_type in $types)]', {types})
  .then(result => console.log(result) || result)
  /**
   * You should probably export your dataset first. This permanently deletes data.
   **/
// .then(result => {
//   const ids = JSON.stringify(result)
// })

client.delete({query: '*[!(_type in $types)]', param: {types}}).then(result => console.log('Deleted:', result)).catch(err => console.log(err))
