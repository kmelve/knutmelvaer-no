import Webcam from 'part:sanity-plugin-asset-source-webcam/image-asset-source'

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      options: {
        sources: [Webcam]
      }
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Website url'
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter handle (without the @)'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
