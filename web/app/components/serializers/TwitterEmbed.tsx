import { TwitterTweetEmbed } from "react-twitter-embed";
type TweetEmbed = {
  url: string;
  title: string;
};

export default function TweetEmbed({ node }: { node: TweetEmbed }) {
  const { url, title } = node;
  if (!url) {
    return null;
  }
  const exp = /\/status\/(\d+)($|[?/])/;
  const [, id] = exp.exec(url) || [];

  if (id) {
    return (
      <TwitterTweetEmbed
        tweetId={id}
        options={{ conversation: "none", "hide-thread": true }}
      />
    );
  }
  return null;
}
