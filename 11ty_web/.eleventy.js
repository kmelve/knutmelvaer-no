const { DateTime } = require("luxon");
const util = require('util')
const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const pluginTOC = require('eleventy-plugin-toc')
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const responsiveImage = require('@dyve/11ty-plugin-sanity-responsiveimage');
const sanityClient = require('./src/utils/sanityClient')

module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        // Templates:
        "html",
        "njk",
        "md",
        // Static Assets:
        "css",
        "jpeg",
        "jpg",
        "png",
        "svg",
        "woff",
        "woff2"
    ]);
    // https://www.11ty.io/docs/quicktips/inline-css/
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("debug", function (value) {
        return util.inspect(value, { compact: false })
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
        return new Date(dateObj).toDateString()
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter('jsondump', (data) => {
        try {
            return JSON.stringify(data, null, 2);
        } catch (e) {
            console.log(e)
        }
    })

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(embedYouTube);
    eleventyConfig.addPlugin(embedTwitter, {
        cacheText: true,
        doNotTrack: true
    });
    eleventyConfig.addPlugin(eleventyNavigationPlugin);


    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'],
        wrapper: 'div'
    })
    let markdownIt = require("markdown-it");
    let markdownItAnchor = require("markdown-it-anchor");
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    let opts = {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    };

    eleventyConfig.setLibrary("md", markdownIt(options)
        .use(markdownItAnchor, opts)
    );

    eleventyConfig.addFilter("markdownify", function (value) {
        const md = new markdownIt(options)
        return md.render(value)
    })
    eleventyConfig.addWatchTarget("style");
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPlugin(responsiveImage, { client: sanityClient });


    return {
        /* templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ], */

        // If your site lives in a different subdirectory, change this.
        // Leading or trailing slashes are all normalized away, so don’t worry about it.
        // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
        // This is only used for URLs (it does not affect your file structure)
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        // passthroughFileCopy: true,
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
}