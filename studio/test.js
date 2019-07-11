import client from 'part:@sanity/base/client'

const referal = 'r' + hashCode('https://twitter.com')

const path = `referals.${referal}`

client
  .patch('drafts.28e4ce52-413a-4335-a9b5-d8cc47815e44')
  .setIfMissing({referals: {
    _type: 'referals',
    [referal]: 0
  }})
  .inc({path, amount: 1})
  .commit()
  .then(console.log)
  .catch(console.log)

function hashCode (str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
}
