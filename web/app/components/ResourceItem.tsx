import type { Link } from "~/routes/index";
// import { InternalLink } from "~/routes/index";

export default function ResourceItem(props: Link) {
  const { _key, link, text } = props;
  return (
    <li key={_key}>
      <a rel="me" href={link?.href}>
        {text}
      </a>
    </li>
  );
}
