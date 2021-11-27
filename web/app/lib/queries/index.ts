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
    }
  },
  "posts": *[
    _type == "post"
    && slug.current != null
  ]|order(publishedAt desc)
}`;
