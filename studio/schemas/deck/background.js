export default {
  name: 'background',
  title: 'Background',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color'
    }
  ]
}
