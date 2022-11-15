import getYouTubeId from "get-youtube-id";
import YouTubeEmbed from "react-youtube";

type YouTubeProps = {
  url: string;
  caption?: string;
  credit?: string;
};

export default function YouTube({ node }: { node: YouTubeProps }) {
  const { url /* , caption, credit */ } = node;
  const id = getYouTubeId(url) || undefined;
  return <YouTubeEmbed videoId={id} />;
}
