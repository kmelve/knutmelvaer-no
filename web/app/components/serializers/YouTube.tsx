import getYouTubeId from "get-youtube-id";
import YouTubeEmbed from "react-youtube";

type YouTube = {
  url: string;
  caption?: string;
  credit?: string;
};

export default function YouTube({ node }: { node: YouTube }) {
  const { url /* , caption, credit */ } = node;
  const id = getYouTubeId(url) || undefined;
  return <YouTubeEmbed videoId={id} />;
}
