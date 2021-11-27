export const aboutQuery = `//groq
*[_type == "person" && slug.current == "knut-melvaer"][0]{
  name,
  image,
  bio,
  twitter
}`;
