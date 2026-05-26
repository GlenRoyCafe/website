// Question: Please generate a fairly simple draft website for Glen Roy Cafe, using the supplied logo and house styles, with Decap CMS in mind.
const Image = require("@11ty/eleventy-img");
const path = require("path");

async function sceneryItemShortcode(src, alt, caption, index) {
  const inputPath = path.join("src", "scenery", src);
  const metadata = await Image(inputPath, {
    widths: [400, 800, 1200, 1800],
    formats: ["webp", "jpeg"],
    outputDir: "./_site/assets/img/scenery/",
    urlPath: "/assets/img/scenery/",
  });

  const largestJpeg = metadata.jpeg[metadata.jpeg.length - 1];
  const largestWebp = metadata.webp[metadata.webp.length - 1];

  const thumbHTML = Image.generateHTML(metadata, {
    alt,
    sizes: "(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw",
    loading: "lazy",
    decoding: "async",
  });

  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<button type="button" class="scenery-item" data-index="${index}" data-full="${esc(largestWebp.url)}" data-full-jpeg="${esc(largestJpeg.url)}" data-full-width="${largestJpeg.width}" data-full-height="${largestJpeg.height}" data-caption="${esc(caption)}" data-alt="${esc(alt)}" aria-label="View larger: ${esc(caption)}">${thumbHTML}<span class="scenery-caption">${esc(caption)}</span></button>`;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  // Serve scenery originals at a stable URL so Decap can render image previews.
  // The public gallery uses optimised variants from /assets/img/scenery/ instead.
  eleventyConfig.addPassthroughCopy({ "src/scenery": "scenery-original" });
  eleventyConfig.addFilter("readableDate", function(value) {
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(value);
  });

  eleventyConfig.addNunjucksAsyncShortcode("sceneryItem", sceneryItemShortcode);

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
