export const postsQuery = `//groq
*[
    _type == "post"
    && slug.current != null
  ]|order(publishedAt desc)`;
