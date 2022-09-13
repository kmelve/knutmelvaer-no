var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var React = __toESM(require("react")), import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-PCGDQWML.css";

// app/lib/dateUtils.ts
var import_date_fns = require("date-fns"), readableDate = (date) => {
  if (date)
    return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "yyyy-MM-dd");
}, slugDate = (date) => {
  if (date)
    return (0, import_date_fns.format)((0, import_date_fns.parseISO)(date), "yyyy/MM");
};

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 18
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "dark:bg-gray-800 dark:text-gray-100",
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteChangeAnnouncement, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 70,
            columnNumber: 52
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container w-full max-w-6xl px-2 mx-auto xl:px-0",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container flex flex-col flex-wrap items-center py-2 mb-4 md:flex-row",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: "/apple-touch-icon.png",
              width: "20",
              height: "20",
              className: "mr-2",
              alt: "Book emoji"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
              to: "/",
              title: "Knut Melv\xE6r",
              className: "font-medium text-gray-900 dark:text-gray-200 title-font",
              children: "Knut\xA0Melv\xE6r"
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 88,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
              "aria-label": "Main navigation",
              className: "flex flex-wrap items-center justify-center py-4 space-x-5 text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.NavLink, {
                  to: "/",
                  className: "hover:text-gray-900",
                  children: "Home"
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.NavLink, {
                  to: "/about",
                  className: "hover:text-gray-900",
                  children: "About"
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 102,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.NavLink, {
                  to: "/rss.xml",
                  className: "hover:text-gray-900",
                  reloadDocument: !0,
                  children: "RSS"
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 105,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 95,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-12",
        children
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "\xA9 Knut Melv\xE6r\xA0",
            readableDate(new Date().toISOString())
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 117,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 116,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that you do not have access to."
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: `${caught.status} ${caught.statusText}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: [
            caught.status,
            ": ",
            caught.statusText
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 149,
          columnNumber: 9
        }, this),
        message
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 147,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "There was an error"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 164,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: error.message
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 165,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: "Hey, developer, you should replace this with what you want your users to see."
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 167,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 161,
    columnNumber: 5
  }, this);
}
var RouteChangeAnnouncement = React.memo(() => {
  let [hydrated, setHydrated] = React.useState(!1), [innerHtml, setInnerHtml] = React.useState(""), location = (0, import_react2.useLocation)();
  React.useEffect(() => {
    setHydrated(!0);
  }, []);
  let firstRenderRef = React.useRef(!0);
  return React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = !1;
      return;
    }
    let pageTitle = location.pathname === "/" ? "Home page" : document.title;
    setInnerHtml(`Navigated to ${pageTitle}`);
  }, [location.pathname]), hydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    "aria-live": "assertive",
    "aria-atomic": !0,
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
    },
    children: innerHtml
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 233,
    columnNumber: 5
  }, this) : null;
});

// app/routes/blog/$year.$month.$slug.tsx
var year_month_slug_exports = {};
__export(year_month_slug_exports, {
  default: () => Post,
  loader: () => loader
});
var import_react7 = require("@remix-run/react");

// app/lib/sanity/getClient.ts
var import_picosanity = __toESM(require("picosanity"));

// app/lib/sanity/config.ts
var config = {
  projectId: "ndjrels0",
  dataset: "production",
  useCdn: !1,
  apiVersion: "2021-11-25"
};

// app/lib/sanity/getClient.ts
var sanityClient = new import_picosanity.default(config);

// app/components/BlogPost.tsx
var import_react5 = require("@remix-run/react"), import_react6 = require("react");

// app/components/PortableText.tsx
var import_block_content_to_react2 = __toESM(require("@sanity/block-content-to-react"));

// app/components/serializers/Block.tsx
var import_block_content_to_react = __toESM(require("@sanity/block-content-to-react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Block(props) {
  let { style = "normal", _key } = props.node;
  if (/^h\d/.test(style)) {
    let HeadingTag = style, headingId = `h${_key}`;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadingTag, {
      id: headingId,
      className: "heading group flex whitespace-pre-wrap",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: `#${headingId}`,
          "aria-hidden": "true",
          tabIndex: -1,
          className: "absolute after:hash opacity-0 group-hover:opacity-100",
          style: {
            marginLeft: "-1em",
            paddingRight: "0.5em",
            boxShadow: "none",
            color: "rgb(161, 161, 170)"
          },
          children: "#"
        }, void 0, !1, {
          fileName: "app/components/serializers/Block.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: props.children
        }, void 0, !1, {
          fileName: "app/components/serializers/Block.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/serializers/Block.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }
  return style === "blockquote" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
    children: props.children
  }, void 0, !1, {
    fileName: "app/components/serializers/Block.tsx",
    lineNumber: 34,
    columnNumber: 12
  }, this) : import_block_content_to_react.default.defaultSerializers.types.block(props);
}

// app/components/serializers/Code.tsx
var import_prism_react_renderer = __toESM(require("prism-react-renderer")), import_github = __toESM(require("prism-react-renderer/themes/github")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Code({ node }) {
  let { code, language } = node;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_prism_react_renderer.default, {
    ...import_prism_react_renderer.defaultProps,
    code,
    language,
    theme: import_github.default,
    children: ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
      className,
      style,
      children: tokens.map((line, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        ...getLineProps({ line, key: i }),
        children: line.map((token, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          ...getTokenProps({ token, key })
        }, void 0, !1, {
          fileName: "app/components/serializers/Code.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this))
      }, void 0, !1, {
        fileName: "app/components/serializers/Code.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this))
    }, void 0, !1, {
      fileName: "app/components/serializers/Code.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/serializers/Code.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/lib/sanity/urlFor.ts
var import_image_url = __toESM(require("@sanity/image-url"));
var urlFor = (source) => (0, import_image_url.default)(sanityClient).image(source);

// app/components/serializers/Image.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Image({ node }) {
  let { asset, alt, caption, credit, url } = node;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
    src: urlFor(asset).url()
  }, void 0, !1, {
    fileName: "app/components/serializers/Image.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/components/serializers/TwitterEmbed.tsx
var import_react_twitter_embed = require("react-twitter-embed"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TweetEmbed({ node }) {
  let { url, title } = node;
  if (!url)
    return null;
  let exp = /\/status\/(\d+)($|[?/])/, [, id] = exp.exec(url) || [];
  return id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_twitter_embed.TwitterTweetEmbed, {
    tweetId: id,
    options: { conversation: "none", "hide-thread": !0 }
  }, void 0, !1, {
    fileName: "app/components/serializers/TwitterEmbed.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) : null;
}

// app/components/serializers/YouTube.tsx
var import_get_youtube_id = __toESM(require("get-youtube-id")), import_react_youtube = __toESM(require("react-youtube")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function YouTube({ node }) {
  let { url } = node, id = (0, import_get_youtube_id.default)(url) || void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_youtube.default, {
    videoId: id
  }, void 0, !1, {
    fileName: "app/components/serializers/YouTube.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
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
}, serializers_default = serializers;

// app/components/PortableText.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PortableText2 = ({ blocks }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_block_content_to_react2.default, {
  imageOptions: sanityClient,
  blocks,
  serializers: serializers_default
}, void 0, !1, {
  fileName: "app/components/PortableText.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this);

// app/components/TableOfContents.tsx
var import_react3 = require("@remix-run/react"), import_block_content_to_react3 = __toESM(require("@sanity/block-content-to-react")), import_react4 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), serializers2 = (current) => ({
  types: {
    block: (props) => {
      let { node, children } = props, { style, _key, listItem } = node;
      if (style.startsWith("h") && !listItem) {
        let level = Number(style.substring(1)), link = `h${_key}`, className = `mb-2 ${level > 2 ? "ml-4 text-sm" : ""} ${current === link ? "text-blue-500" : ""}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          className,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            id: link,
            className: "toc-link",
            to: "#" + link,
            children
          }, void 0, !1, {
            fileName: "app/components/TableOfContents.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/TableOfContents.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this);
      }
      return null;
    }
  }
});
function TableOfContents(props) {
  let [current, setCurrent] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          let id = entry2.target.id, el = document.querySelector(`a#${id}`);
          entry2.intersectionRatio > 0.8 ? el && el.classList.add("text-blue-500") : el && el.classList.remove("text-blue-500");
        });
      },
      {
        threshold: [0, 0.8]
      }
    );
    document.querySelectorAll(".heading").forEach((section) => {
      observer.observe(section);
    });
  }, []);
  let { blocks } = props, onlyParagraphBlocks = blocks.filter(
    ({ _type, style = "" }) => _type === "block" && style.startsWith("h")
  );
  return onlyParagraphBlocks.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "p-4 bg-gray-100 rounded sticky top-6 max-h-screen overflow-auto",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
        className: "text-xs mb-4",
        children: "Table of contents"
      }, void 0, !1, {
        fileName: "app/components/TableOfContents.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_block_content_to_react3.default, {
          blocks: onlyParagraphBlocks,
          serializers: serializers2(current)
        }, void 0, !1, {
          fileName: "app/components/TableOfContents.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/TableOfContents.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/TableOfContents.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) : null;
}

// app/components/BlogPost.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function BlogPost({ post }) {
  let { title, body, publishedAt, mainImage } = post, sectionizedBody = (0, import_react6.useMemo)(() => {
    body.reduce((acc, item) => (/^h\d/.test(item.style), acc), []);
  }, [body]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
        className: "filter grayscale contrast-100",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "w-full mb-10 rounded-sm",
          src: urlFor(mainImage).height(350).width(900).auto("format").url(),
          alt: mainImage.alt
        }, void 0, !1, {
          fileName: "app/components/BlogPost.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/BlogPost.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col md:flex-row",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
            className: "w-full mr-20 prose md:w-8/12",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                children: title
              }, void 0, !1, {
                fileName: "app/components/BlogPost.tsx",
                lineNumber: 48,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PortableText2, {
                blocks: body
              }, void 0, !1, {
                fileName: "app/components/BlogPost.tsx",
                lineNumber: 49,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
                to: "/",
                children: "Moar posts!"
              }, void 0, !1, {
                fileName: "app/components/BlogPost.tsx",
                lineNumber: 50,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/BlogPost.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
            className: "w-4/12 pt-28",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "p-4 mb-4 bg-gray-100 rounded",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-sm",
                  children: [
                    "Published ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                      dateTime: publishedAt,
                      children: publishedAt
                    }, void 0, !1, {
                      fileName: "app/components/BlogPost.tsx",
                      lineNumber: 55,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/BlogPost.tsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/BlogPost.tsx",
                lineNumber: 53,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableOfContents, {
                blocks: body
              }, void 0, !1, {
                fileName: "app/components/BlogPost.tsx",
                lineNumber: 64,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/BlogPost.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/BlogPost.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/BlogPost.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/blog/$year.$month.$slug.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader({ params }) {
  var _a;
  let { slug } = params, post = await sanityClient.fetch(
    '*[_type == "post" && slug.current == $slug][0]',
    { slug }
  );
  return {
    post: {
      ...post,
      ...post,
      slug: `${slugDate(post == null ? void 0 : post.publishedAt)}/${(_a = post.slug) == null ? void 0 : _a.current}`,
      publishedAt: readableDate(post.publishedAt)
    }
  };
}
function Post() {
  let { post } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogPost, {
    post
  }, void 0, !1, {
    fileName: "app/routes/blog/$year.$month.$slug.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog,
  loader: () => loader2
});
var import_react9 = require("@remix-run/react");

// app/components/BlogPostPreview.tsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function BlogPostPreview(props) {
  let { _id, title, publishedAt, slug, excerpt, mainImage } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
    to: `${slug}`,
    className: `flex flex-col md:flex-row max-w-2xl mb-6
      bg-gray-100 dark:bg-gray-700 rounded p-4 hover:bg-gray-200 dark:hover:bg-gray-600
      transition-shadow duration-200 hover:shadow`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "w-full md:w-10/12",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", {
          className: "font-grey",
          children: publishedAt
        }, void 0, !1, {
          fileName: "app/components/BlogPostPreview.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "mb-2 font-black leading-none md:text-xl",
          children: title
        }, void 0, !1, {
          fileName: "app/components/BlogPostPreview.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PortableText2, {
          blocks: excerpt
        }, void 0, !1, {
          fileName: "app/components/BlogPostPreview.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/BlogPostPreview.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, _id, !1, {
    fileName: "app/components/BlogPostPreview.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
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
  return {
    ...post,
    slug: `${root && root + "/"}${slugDate(post == null ? void 0 : post.publishedAt)}/${(_a = post.slug) == null ? void 0 : _a.current}`,
    publishedAt: readableDate(post.publishedAt)
  };
});

// app/routes/blog/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader2() {
  let posts = await sanityClient.fetch(postsQuery);
  return { posts: preparedPosts(posts) };
}
function Blog() {
  let { posts = [] } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "leading-none font-black text-xl md:text-2xl",
        children: "Posts"
      }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      posts.length > 0 && posts.map(BlogPostPreview)
    ]
  }, void 0, !0, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/work/index.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work,
  loader: () => loader3,
  meta: () => meta
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), categories = [
  "Developer relations",
  "Product marketing",
  "Education",
  "Teaching",
  "Research"
], loader3 = () => null, meta = () => ({
  title: "Work"
});
function Work() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "mb-10 prose",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "pb-2",
            children: "Work"
          }, void 0, !1, {
            fileName: "app/routes/work/index.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              className: "inline text-xs list-style-none",
              children: categories.length > 0 && categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                className: "inline p-2 mr-2 text-gray-600 bg-gray-200 rounded-lg",
                children: category
              }, category, !1, {
                fileName: "app/routes/work/index.tsx",
                lineNumber: 30,
                columnNumber: 17
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/work/index.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/work/index.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/work/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "prose",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          children: "Collaborators"
        }, void 0, !1, {
          fileName: "app/routes/work/index.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/work/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/work/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/rss[.xml].ts
var rss_xml_exports = {};
__export(rss_xml_exports, {
  loader: () => loader4
});
var import_feed = require("feed");
var import_block_content_to_html = __toESM(require("@sanity/block-content-to-html"));
var PortableTextToXML = (blocks) => (0, import_block_content_to_html.default)({
  blocks,
  serializers: {
    marks: {
      internalLink: ({ mark, children }) => {
        let { publishedAt, slug, _type } = mark.reference;
        return _type == "post" ? (0, import_block_content_to_html.h)(
          "a",
          {
            href: `https://www.knutmelvaer.no/${slug}`
          },
          children
        ) : (console.log("Unknown internal link type ", mark.reference), (0, import_block_content_to_html.h)("span", {}, children));
      }
    },
    types: {
      authorReference: ({ node }) => (0, import_block_content_to_html.h)("span", { innerHTML: node.author.name }),
      youtube: ({ node }) => (0, import_block_content_to_html.h)(
        "p",
        {},
        (0, import_block_content_to_html.h)("a", {
          href: node.url,
          innerHTML: "Watch on Youtube."
        })
      ),
      code: ({ node }) => (0, import_block_content_to_html.h)("pre", (0, import_block_content_to_html.h)("code", { lang: node.language }, node.code)),
      mainImage: ({ node }) => (0, import_block_content_to_html.h)("img", {
        src: urlFor(node.asset).url()
      }),
      twitter: ({ node }) => (0, import_block_content_to_html.h)(
        "p",
        {},
        (0, import_block_content_to_html.h)("a", {
          href: node.url,
          innerHTML: "Look at the tweet."
        })
      )
    }
  }
});
async function loader4({ params }) {
  let posts = await sanityClient.fetch(postsQuery).then((docs) => preparedPosts(docs, "https://www.knutmelvaer.no")).then(
    (posts2) => posts2.map((post) => ({
      ...post,
      body: PortableTextToXML(post.body)
    }))
  ), feed = new import_feed.Feed({
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

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader5
});
var import_react10 = require("@remix-run/react");

// app/lib/queries/about.ts
var aboutQuery = `//groq
*[_type == "person" && slug.current == "knut-melvaer"][0]{
  name,
  image,
  bio,
  twitter
}`;

// app/routes/about.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader5() {
  return { about: await sanityClient.fetch(aboutQuery) };
}
function About() {
  let { about } = (0, import_react10.useLoaderData)(), { bio } = about;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "prose",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        children: "About"
      }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PortableText2, {
        blocks: bio
      }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader6,
  meta: () => meta2
});
var import_react11 = require("@remix-run/react");

// app/components/ResourceItem.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ResourceItem(props) {
  let { _key, link, text } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: link == null ? void 0 : link.href,
      children: text
    }, void 0, !1, {
      fileName: "app/components/ResourceItem.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, _key, !1, {
    fileName: "app/components/ResourceItem.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
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

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader6 = async () => {
  let { siteSettings, posts } = await sanityClient.fetch(indexQuery);
  return {
    siteSettings,
    posts: preparedPosts(posts, "blog")
  };
}, meta2 = () => ({
  title: "Knut Melv\xE6r",
  description: "The personal blog."
});
function Index() {
  let { siteSettings, posts } = (0, import_react11.useLoaderData)(), { title, description, keywords, author, resources } = siteSettings;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-wrap px-4 md:px-0",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-4 mb-8 bg-blue-100 rounded-md md:w-7/12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: description
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "w-full pr-6 sm:w-9/12 lg:w-8/12",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mb-4 prose",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
              className: "font-bold",
              children: "Written things"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          posts.length > 0 && posts.map(BlogPostPreview)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
        className: "w-full sm:w-3/12 lg:w-2/12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "prose",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
              className: "my-0",
              children: "Links"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: (resources == null ? void 0 : resources.length) > 0 && resources.map(ResourceItem)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 87,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/hi.ts
var hi_exports = {};
__export(hi_exports, {
  loader: () => loader7
});

// app/lib/sanity/getServerSideClient.ts
var import_client = __toESM(require("@sanity/client"));
var getServerSideClient = (SANITY_WRITE_TOKEN) => (SANITY_WRITE_TOKEN || console.error("No write token"), (0, import_client.default)({
  ...config,
  token: SANITY_WRITE_TOKEN,
  useCdn: !1
}));

// app/routes/hi.ts
var english_ordinal_rules = new Intl.PluralRules("en", { type: "ordinal" }), suffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th"
};
function ordinal(number) {
  let category = english_ordinal_rules.select(number), suffix = suffixes[category];
  return number + suffix;
}
async function loader7({ params }) {
  let SANITY_WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN, number;
  try {
    number = (await getServerSideClient(SANITY_WRITE_TOKEN).patch("shellStats").inc({ number: 1 }).commit()).number;
  } catch (error) {
    return console.error(error), new Response(
      `#!/bin/bash
 echo "Sorry, something didn't work. Come back later!"`,
      {
        status: 200,
        headers: {
          "Content-Type": "text/x-shellscript"
        }
      }
    );
  }
  let shellScript = `#!/bin/bash

echo "Hello, brave person from the web. This is the ${ordinal(
    number
  )} time this command has been run. Thank you for visiting!"
`;
  return new Response(shellScript, {
    status: 200,
    headers: {
      "Content-Type": "text/x-shellscript"
    }
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d78956bb", entry: { module: "/build/entry.client-YKEC3Q7Q.js", imports: ["/build/_shared/chunk-EVPYS2JY.js", "/build/_shared/chunk-3CPB4T5C.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2Y4V2DEX.js", imports: ["/build/_shared/chunk-D425SOAN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-O46AN4Y3.js", imports: ["/build/_shared/chunk-I3SBWYU4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$year.$month.$slug": { id: "routes/blog/$year.$month.$slug", parentId: "root", path: "blog/:year/:month/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$year.$month.$slug-TXHIF6RW.js", imports: ["/build/_shared/chunk-I3SBWYU4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-HO6ZEM7Y.js", imports: ["/build/_shared/chunk-KOTK3FGD.js", "/build/_shared/chunk-I3SBWYU4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/hi": { id: "routes/hi", parentId: "root", path: "hi", index: void 0, caseSensitive: void 0, module: "/build/routes/hi-UKB2CKDF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-7YK6VAUX.js", imports: ["/build/_shared/chunk-KOTK3FGD.js", "/build/_shared/chunk-I3SBWYU4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rss[.xml]": { id: "routes/rss[.xml]", parentId: "root", path: "rss.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/rss[.xml]-K6PE6C23.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work/index": { id: "routes/work/index", parentId: "root", path: "work", index: !0, caseSensitive: void 0, module: "/build/routes/work/index-VAE5WCBO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-D78956BB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
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
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/work/index": {
    id: "routes/work/index",
    parentId: "root",
    path: "work",
    index: !0,
    caseSensitive: void 0,
    module: work_exports
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
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/hi": {
    id: "routes/hi",
    parentId: "root",
    path: "hi",
    index: void 0,
    caseSensitive: void 0,
    module: hi_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
