const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'ndjrels0',
  dataset: 'production',
  apiVersion: '2021-08-20',
  useCdn: false
})

module.exports = client
