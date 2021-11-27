export const indexQuery = `//groq
{
  "siteSettings": *[_id == "siteSettings"][0]{
    title,
    url,
    keywords,
    description,
    author->{
      name,
      image
    },
    resources[]{
      _key,
      "link" != null => @,
      _type == "internalLink" => @->{
        _id,
        slug
      }
    }
  },
  "posts": *[
    _type == "post"
    && slug.current != null
  ]|order(publishedAt desc)
}`;
