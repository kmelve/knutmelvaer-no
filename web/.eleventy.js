const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", dateISOstring => {
      return DateTime.fromISO(dateISOstring).toFormat("dd LLL yyyy");
  });
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateISOstring) => {
      return DateTime.fromISO(dateISOstring).toFormat('yyyy-LL-dd');
  });
  // Copy the `img` and `css` folders to the output
  // eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
}
