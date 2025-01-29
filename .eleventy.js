module.exports = function(eleventyConfig) {
  // Copy the admin folder to the output
  eleventyConfig.addPassthroughCopy("admin");
  
  // Copy CSS files
  eleventyConfig.addPassthroughCopy("css");

  // Add collection for each language
  eleventyConfig.addCollection("pages_en", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/pages/en/*.md");
  });

  eleventyConfig.addCollection("pages_fr", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/pages/fr/*.md");
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk"
  };
};