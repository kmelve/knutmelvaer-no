import {format, parseISO} from 'date-fns'

export const path = ({publishedAt, slug}) => {
  if (!publishedAt || !slug) {
    return false
  }
  const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
  return `/${dateSegment}/${slug.current}/`
}

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fieldsets: [
    {name: 'social', title: 'Social media handles'}
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'tweet',
      type: 'url',
      title: 'Post tweet'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'personReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools',
      options: {
        baseUrl: 'https://knutmelvaer.no/blog',
        slug (doc) { // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
          const {slug, publishedAt} = doc
          console.log(path({slug, publishedAt}))
          return path({slug, publishedAt})
        }
      }
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      return {
        title,
        media,
        subtitle: path({publishedAt, slug}) || 'Missing publishing date'
      }
    }
  }
}
