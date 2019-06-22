export default {
  name: 'personReference',
  type: 'object',
  title: 'Person reference',
  fields: [
    {
      name: 'person',
      type: 'reference',
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
