import type { LoaderFunction, MetaFunction } from "@remix-run/node";

let categories: string[] = [
  "Developer relations",
  "Product marketing",
  "Education",
  "Teaching",
  "Research",
];

export const loader: LoaderFunction = () => {
  return null;
};

export const meta: MetaFunction = () => {
  return {
    title: "Work",
  };
};

export default function Work() {
  return (
    <>
      <section className="mb-10 prose">
        <h1 className="pb-2">Work</h1>
        <nav>
          <ul className="inline text-xs list-style-none">
            {categories.length > 0 &&
              categories.map((category) => (
                <li
                  key={category}
                  className="inline p-2 mr-2 text-gray-600 bg-gray-200 rounded-lg"
                >
                  {category}
                </li>
              ))}
          </ul>
        </nav>
      </section>
      <section className="prose">
        <h2>Collaborators</h2>
      </section>
    </>
  );
}
