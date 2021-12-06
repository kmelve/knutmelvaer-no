var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React2 = __toModule(require("react"));
var import_remix2 = __toModule(require("remix"));

// app/styles/app.css
var app_default = "/build/_assets/app-4LHEDP64.css";

// app/lib/dateUtils.ts
var import_date_fns = __toModule(require("date-fns"));
var readableDate = (date) => {
  if (date) {
    return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "yyyy-MM-dd");
  }
  return void 0;
};
var slugDate = (date) => {
  if (date) {
    return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "yyyy/MM");
  }
  return void 0;
};

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement(import_remix2.Outlet, null)));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React2.createElement("title", null, title) : null, /* @__PURE__ */ React2.createElement(import_remix2.Meta, null), /* @__PURE__ */ React2.createElement(import_remix2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(RouteChangeAnnouncement, null), /* @__PURE__ */ React2.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React2.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React2.createElement("div", {
    className: "container mx-auto w-full max-w-6xl px-2 xl:px-0"
  }, /* @__PURE__ */ React2.createElement("header", null, /* @__PURE__ */ React2.createElement("div", {
    className: "container flex flex-wrap py-2 flex-col md:flex-row items-center mb-4"
  }, /* @__PURE__ */ React2.createElement(import_remix2.Link, {
    to: "/",
    title: "Knut Melv\xE6r",
    className: "title-font font-medium text-gray-900"
  }, "Knut Melv\xE6r"), /* @__PURE__ */ React2.createElement("nav", {
    "aria-label": "Main navigation",
    className: "md:mr-auto md:ml-4 py-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-5"
  }, /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
    to: "/",
    className: "hover:text-gray-900"
  }, "Home"), /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
    to: "/about",
    className: "hover:text-gray-900"
  }, "About"), /* @__PURE__ */ React2.createElement(import_remix2.NavLink, {
    to: "/rss.xml",
    className: "hover:text-gray-900",
    reloadDocument: true
  }, "RSS")))), /* @__PURE__ */ React2.createElement("div", {
    className: "mb-12"
  }, children), /* @__PURE__ */ React2.createElement("footer", null, /* @__PURE__ */ React2.createElement("p", null, "\xA9 Knut Melv\xE6r\xA0", readableDate(new Date().toISOString()))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React2.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React2.createElement(Layout, null, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h1", null, "There was an error"), /* @__PURE__ */ React2.createElement("p", null, error.message), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
var RouteChangeAnnouncement = React2.memo(() => {
  let [hydrated, setHydrated] = React2.useState(false);
  let [innerHtml, setInnerHtml] = React2.useState("");
  let location = (0, import_remix2.useLocation)();
  React2.useEffect(() => {
    setHydrated(true);
  }, []);
  let firstRenderRef = React2.useRef(true);
  React2.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]);
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ React2.createElement("div", {
    "aria-live": "assertive",
    "aria-atomic": true,
    id: "route-change-region",
    style: {
      border: "0",
      clipPath: "inset(100%)",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  }, innerHtml);
});

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/blog/$year.$month.$slug.tsx
var year_month_slug_exports = {};
__export(year_month_slug_exports, {
  default: () => Post,
  loader: () => loader
});
var import_remix5 = __toModule(require("remix"));

// app/lib/sanity/getClient.ts
var import_picosanity = __toModule(require("picosanity"));

// app/lib/sanity/config.ts
var config = {
  projectId: "ndjrels0",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-11-25"
};

// app/lib/sanity/getClient.ts
var sanityClient = new import_picosanity.default(config);

// app/components/BlogPost.tsx
var import_remix4 = __toModule(require("remix"));

// app/components/PortableText.tsx
var import_block_content_to_react2 = __toModule(require("@sanity/block-content-to-react"));

// app/components/serializers/Block.tsx
var import_block_content_to_react = __toModule(require("@sanity/block-content-to-react"));
function Block(props) {
  const { style = "normal", _key } = props.node;
  if (/^h\d/.test(style)) {
    const HeadingTag = style;
    const headingId = `h${_key}`;
    return /* @__PURE__ */ React.createElement(HeadingTag, {
      id: headingId,
      className: "group flex whitespace-pre-wrap"
    }, /* @__PURE__ */ React.createElement("a", {
      href: `#${headingId}`,
      "aria-hidden": "true",
      tabIndex: -1,
      className: "absolute after:hash opacity-0 group-hover:opacity-100",
      style: {
        marginLeft: "-1em",
        paddingRight: "0.5em",
        boxShadow: "none",
        color: "rgb(161, 161, 170)"
      }
    }, "#"), /* @__PURE__ */ React.createElement("span", null, props.children));
  }
  if (style === "blockquote") {
    return /* @__PURE__ */ React.createElement("blockquote", null, props.children);
  }
  return import_block_content_to_react.default.defaultSerializers.types.block(props);
}

// app/components/serializers/Code.tsx
var import_prism_react_renderer = __toModule(require("prism-react-renderer"));
var import_github = __toModule(require("prism-react-renderer/themes/github"));
function Code({ node }) {
  const { code, language } = node;
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    code,
    language,
    theme: import_github.default
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement("pre", {
    className,
    style
  }, tokens.map((line, i) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, getLineProps({ line, key: i })), line.map((token, key) => /* @__PURE__ */ React.createElement("span", __spreadValues({}, getTokenProps({ token, key }))))))));
}

// app/lib/sanity/urlFor.ts
var import_image_url = __toModule(require("@sanity/image-url"));
var urlFor = (source) => (0, import_image_url.default)(sanityClient).image(source);

// app/components/serializers/Image.tsx
function Image({ node }) {
  const { asset, alt, caption, credit, url } = node;
  return /* @__PURE__ */ React.createElement("img", {
    src: urlFor(asset).url()
  });
}

// app/components/serializers/TwitterEmbed.tsx
var import_react_twitter_embed = __toModule(require("react-twitter-embed"));
function TweetEmbed({ node }) {
  const { url, title } = node;
  if (!url) {
    return null;
  }
  const exp = /\/status\/(\d+)($|[?/])/;
  const [, id] = exp.exec(url) || [];
  if (id) {
    return /* @__PURE__ */ React.createElement(import_react_twitter_embed.TwitterTweetEmbed, {
      tweetId: id,
      options: { conversation: "none", "hide-thread": true }
    });
  }
  return null;
}

// app/components/serializers/YouTube.tsx
var import_get_youtube_id = __toModule(require("get-youtube-id"));
var import_react_youtube = __toModule(require("react-youtube"));
function YouTube({ node }) {
  const { url } = node;
  const id = (0, import_get_youtube_id.default)(url) || void 0;
  return /* @__PURE__ */ React.createElement(import_react_youtube.default, {
    videoId: id
  });
}

// app/components/serializers/index.tsx
var serializers = {
  types: {
    block: Block,
    mainImage: Image,
    code: Code,
    youtube: YouTube,
    twitter: TweetEmbed
  },
  marks: {
    internalLink: () => null
  }
};
var serializers_default = serializers;

// app/components/PortableText.tsx
var PortableText2 = ({ blocks }) => {
  return /* @__PURE__ */ React.createElement(import_block_content_to_react2.default, {
    imageOptions: sanityClient,
    blocks,
    serializers: serializers_default
  });
};

// app/components/TableOfContents.tsx
var import_remix3 = __toModule(require("remix"));
var import_block_content_to_react3 = __toModule(require("@sanity/block-content-to-react"));
var serializers2 = {
  types: {
    block: (props) => {
      const { node } = props;
      const { style, _key, listItem } = node;
      if (style.startsWith("h") && !listItem) {
        let level = style.substring(1);
        return /* @__PURE__ */ React.createElement("li", {
          className: "mb-2 text-sm"
        }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
          to: `#h${_key}`,
          className: level > 2 ? " mr-4" : ""
        }, props.children));
      }
      return null;
    }
  }
};
function TableOfContents(props) {
  const { blocks } = props;
  const onlyBlocks = blocks.filter(({ _type, style = "" }) => _type === "block" && style.startsWith("h"));
  if (onlyBlocks.length === 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("nav", {
    className: "p-4 bg-gray-100 rounded sticky top-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-xs mb-4"
  }, "Table of contents"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement(import_block_content_to_react3.default, {
    blocks: onlyBlocks,
    serializers: serializers2
  })));
}

// app/components/BlogPost.tsx
function BlogPost({ post }) {
  const { title, body, publishedAt, mainImage } = post;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
    className: "w-full rounded-sm mb-10",
    src: urlFor(post.mainImage).height(350).width(900).auto("format").url(),
    alt: post.mainImage.alt
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row"
  }, /* @__PURE__ */ React.createElement("article", {
    className: "prose mr-20 w-full md:w-8/12"
  }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(PortableText2, {
    blocks: body
  }), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, "Moar posts!")), /* @__PURE__ */ React.createElement("aside", {
    className: "pt-28 w-4/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-4 bg-gray-100 rounded mb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, "Published ", /* @__PURE__ */ React.createElement("time", {
    dateTime: publishedAt
  }, publishedAt))), /* @__PURE__ */ React.createElement(TableOfContents, {
    blocks: body
  }))));
}

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/blog/$year.$month.$slug.tsx
async function loader({ params }) {
  var _a;
  const { slug } = params;
  const post = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
  return {
    post: __spreadProps(__spreadValues(__spreadValues({}, post), post), {
      slug: `${slugDate(post == null ? void 0 : post.publishedAt)}/${(_a = post.slug) == null ? void 0 : _a.current}`,
      publishedAt: readableDate(post.publishedAt)
    })
  };
}
function Post() {
  const { post } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(BlogPost, {
    post
  });
}

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader2
});
var import_remix7 = __toModule(require("remix"));

// app/components/BlogPostPreview.tsx
var import_remix6 = __toModule(require("remix"));
function BlogPostPreview(props) {
  const { _id, title, publishedAt, slug, excerpt, mainImage } = props;
  return /* @__PURE__ */ React.createElement(import_remix6.Link, {
    key: _id,
    to: `${slug}`,
    className: `flex flex-col md:flex-row max-w-2xl mb-6
      bg-gray-100 rounded p-4 hover:bg-gray-200
      transition-shadow duration-200 hover:shadow`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-10/12"
  }, /* @__PURE__ */ React.createElement("small", {
    className: "font-grey"
  }, publishedAt), /* @__PURE__ */ React.createElement("h2", {
    className: "leading-none font-black md:text-xl mb-2"
  }, title), /* @__PURE__ */ React.createElement(PortableText2, {
    blocks: excerpt
  })));
}

// app/lib/queries/posts.ts
var postsQuery = `//groq
*[
    _type == "post"
    && slug.current != null
  ]|order(publishedAt desc)`;

// app/lib/preparePost.ts
var preparedPosts = (posts, root) => posts.map((post) => {
  var _a;
  return __spreadProps(__spreadValues({}, post), {
    slug: `${root && root + "/"}${slugDate(post == null ? void 0 : post.publishedAt)}/${(_a = post.slug) == null ? void 0 : _a.current}`,
    publishedAt: readableDate(post.publishedAt)
  });
});

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/blog/index.tsx
async function loader2() {
  const posts = await sanityClient.fetch(postsQuery);
  return { posts: preparedPosts(posts) };
}
function Blog() {
  let { posts = [] } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", {
    className: "leading-none font-black text-xl md:text-2xl"
  }, "Posts"), posts.length > 0 && posts.map(BlogPostPreview));
}

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/rss[.xml].ts
var rss_xml_exports = {};
__export(rss_xml_exports, {
  loader: () => loader3
});
var import_feed = __toModule(require("feed"));
var import_block_content_to_html = __toModule(require("@sanity/block-content-to-html"));
var PortableTextToXML = (blocks) => (0, import_block_content_to_html.default)({
  blocks,
  serializers: {
    marks: {
      internalLink: ({ mark, children }) => {
        let { publishedAt, slug, _type } = mark.reference;
        if (_type == "post") {
          return (0, import_block_content_to_html.h)("a", {
            href: `https://www.knutmelvaer.no/${slug}`
          }, children);
        }
        console.log("Unknown internal link type ", mark.reference);
        return (0, import_block_content_to_html.h)("span", {}, children);
      }
    },
    types: {
      authorReference: ({ node }) => (0, import_block_content_to_html.h)("span", { innerHTML: node.author.name }),
      youtube: ({ node }) => (0, import_block_content_to_html.h)("p", {}, (0, import_block_content_to_html.h)("a", {
        href: node.url,
        innerHTML: "Watch on Youtube."
      })),
      code: ({ node }) => (0, import_block_content_to_html.h)("pre", (0, import_block_content_to_html.h)("code", { lang: node.language }, node.code)),
      mainImage: ({ node }) => (0, import_block_content_to_html.h)("img", {
        src: urlFor(node.asset).url()
      }),
      twitter: ({ node }) => (0, import_block_content_to_html.h)("p", {}, (0, import_block_content_to_html.h)("a", {
        href: node.url,
        innerHTML: "Look at the tweet."
      }))
    }
  }
});
async function loader3({ params }) {
  let posts = await sanityClient.fetch(postsQuery).then((docs) => preparedPosts(docs, "https://www.knutmelvaer.no")).then((posts2) => posts2.map((post) => __spreadProps(__spreadValues({}, post), {
    body: PortableTextToXML(post.body)
  })));
  let feed = new import_feed.Feed({
    title: "Knut Melvaer",
    description: "Knut Melvaer's blog",
    id: "https://www.knutmelvaer.no/rss.xml",
    link: "https://www.knutmelvaer.no",
    image: "https://www.knutmelvaer.no/logo.png",
    copyright: "Knut Melvaer",
    updated: new Date(posts[0].publishedAt),
    generator: "Remix",
    feedLinks: {
      json: "https://www.knutmelvaer.no/rss.json",
      atom: "https://www.knutmelvaer.no/rss.xml"
    }
  });
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `https://www.knutmelvaer.no/${post.slug}`,
      description: post.body,
      content: post.body,
      author: [{ name: post.authors[0].name }]
    });
  });
  let rssString = feed.rss2();
  return new Response(rssString, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader4
});
var import_remix8 = __toModule(require("remix"));

// app/lib/queries/about.ts
var aboutQuery = `//groq
*[_type == "person" && slug.current == "knut-melvaer"][0]{
  name,
  image,
  bio,
  twitter
}`;

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/about.tsx
async function loader4() {
  const about = await sanityClient.fetch(aboutQuery);
  return { about };
}
function About() {
  const { about } = (0, import_remix8.useLoaderData)();
  const { bio } = about;
  return /* @__PURE__ */ React.createElement("main", {
    className: "prose"
  }, /* @__PURE__ */ React.createElement("h2", null, "About"), /* @__PURE__ */ React.createElement(PortableText2, {
    blocks: bio
  }));
}

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5,
  meta: () => meta
});
var import_remix9 = __toModule(require("remix"));

// app/components/ResourceItem.tsx
function ResourceItem(props) {
  const { _key, link, text } = props;
  return /* @__PURE__ */ React.createElement("li", {
    key: _key
  }, /* @__PURE__ */ React.createElement("a", {
    href: link == null ? void 0 : link.href
  }, text));
}

// app/lib/queries/index.ts
var indexQuery = `//groq
{
  "siteSettings": *[_id == "siteSettings"][0]{
    title,
    url,
    keywords,
    description,
    author->{
      name,
      image
    },
    resources[]{
      _key,
      "link" != null => @,
      _type == "internalLink" => @->{
        _id,
        slug
      }
    }
  },
  "posts": *[
    _type == "post"
    && slug.current != null
  ]|order(publishedAt desc){
    ...,
    body[]{
      ...,
      "link" != null => @,
      _type == "internalLink" => @->{
        _id,
        slug,
      }
    }
  }
}`;

// route-module:/Users/knutmelvaer/Sites/kmelve/knutmelvaer-no-v2/web/app/routes/index.tsx
var loader5 = async () => {
  const { siteSettings, posts } = await sanityClient.fetch(indexQuery);
  return {
    siteSettings,
    posts: preparedPosts(posts, "blog")
  };
};
var meta = () => {
  return {
    title: "Knut Melv\xE6r",
    description: "The personal blog."
  };
};
function Index() {
  let { siteSettings, posts } = (0, import_remix9.useLoaderData)();
  const { title, description, keywords, author, resources } = siteSettings;
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap px-4 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-10/12 prose mb-12"
  }, /* @__PURE__ */ React.createElement("p", null, description)), /* @__PURE__ */ React.createElement("main", {
    className: "w-full pr-6 sm:w-9/12 lg:w-8/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose mb-4"
  }, /* @__PURE__ */ React.createElement("h3", null, "Musings")), posts.length > 0 && posts.map(BlogPostPreview)), /* @__PURE__ */ React.createElement("aside", {
    className: "w-full sm:w-3/12 lg:w-2/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "prose"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "my-0"
  }, "Links"), /* @__PURE__ */ React.createElement("ul", null, (resources == null ? void 0 : resources.length) > 0 && resources.map(ResourceItem)))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$year.$month.$slug": {
    id: "routes/blog/$year.$month.$slug",
    parentId: "root",
    path: "blog/:year/:month/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: year_month_slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/rss[.xml]": {
    id: "routes/rss[.xml]",
    parentId: "root",
    path: "rss.xml",
    index: void 0,
    caseSensitive: void 0,
    module: rss_xml_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
