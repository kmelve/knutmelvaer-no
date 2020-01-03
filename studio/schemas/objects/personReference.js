import client from 'part:@sanity/base/client'

export default {
  name: 'personReference',
  type: 'object',
  title: 'Person reference',
  fields: [
    {
      name: 'person',
      type: 'reference',
      validation: Rule => Rule.custom(async (values, context) => {
        const {_id} = context.document
        const references = await client.fetch('*[references($id)]', {id: _id})
        console.log({references})

        return !references.length || 'For some reason you can\'t publish a referenced document'
      }),
      to: [
        {
          type: 'person'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'person.name',
      media: 'person.image.asset'
    }
  }
}
