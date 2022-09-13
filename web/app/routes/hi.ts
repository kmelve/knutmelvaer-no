import { getServerSideClient } from "./../lib/sanity/getServerSideClient";

/**
 * Returns a Shell script that prints something to the console.
 */
type loaderParams = {
  params: any;
};

const english_ordinal_rules = new Intl.PluralRules("en", { type: "ordinal" });
const suffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
} as any;
function ordinal(number: any) {
  const category = english_ordinal_rules.select(number);
  const suffix = suffixes[category];
  return number + suffix;
} // -> string

export async function loader({ params }: loaderParams) {
  const SANITY_WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN;
  let number;
  try {
    const docs = await getServerSideClient(SANITY_WRITE_TOKEN)
      .patch("shellStats")
      .inc({ number: 1 })
      .commit();
    number = docs.number;
  } catch (error) {
    console.error(error);
    return new Response(
      `#!/bin/bash\n echo "Sorry, something didn't work. Come back later!"`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/x-shellscript",
        },
      }
    );
  }

  const shellScript = `#!/bin/bash

echo "Hello, brave person from the web. This is the ${ordinal(
    number
  )} time this command has been run. Thank you for visiting!"
`;

  return new Response(shellScript, {
    status: 200,
    headers: {
      "Content-Type": "text/x-shellscript",
    },
  });
}
