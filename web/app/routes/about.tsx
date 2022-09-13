import { useLoaderData } from "@remix-run/react";
import { PortableText } from "~/components/PortableText";
import { aboutQuery } from "~/lib/queries/about";
import { sanityClient } from "~/lib/sanity/getClient";

export async function loader() {
  const about = await sanityClient.fetch(aboutQuery);
  return { about };
}

export default function About() {
  const { about } = useLoaderData();
  const { bio } = about;
  return (
    <main className="prose">
      <h2>About</h2>
      <PortableText blocks={bio} />
    </main>
  );
}
