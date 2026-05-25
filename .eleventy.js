// Question: Please generate a fairly simple draft website for Glen Roy Cafe, using the supplied logo and house styles, with Decap CMS in mind.
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addFilter("readableDate", function(value) {
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(value);
  });

  eleventyConfig.addCollection("announcements", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md").sort((a, b) => b.date - a.date);
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
