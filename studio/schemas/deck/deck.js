export default {
  name: 'deck',
  type: 'document',
  title: 'Slide deck',
  fields: [
    {
      name: 'slides',
      type: 'array',

      of: [
        {
          type: 'slide'
        }
      ]
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block'
        },
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    },
    {
      name: 'date',
      title: 'Date of talk',
      type: 'date'
    },
    {
      name: 'venue',
      title: 'Venue of talk',
      type: 'geopoint'
    },
    {
      name: 'reveal',
      type: 'reveal',
      title: 'Reveal.js settings',
      description: 'Configuration specific for Reveal.js-based frontends'
    }
  ]
}
