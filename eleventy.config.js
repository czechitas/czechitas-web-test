const eleventyImg = require("@11ty/eleventy-img");
const eleventyNavigation = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const { parse } = require('csv-parse/sync');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigation);
    eleventyConfig.addShortcode("image", async function(src, alt, sizes = []) {
        let file = "./content/assets/img/" + src
        let metadata = await eleventyImg(file, { widths: [300, 600], formats: ["avif", "jpeg"], outputDir: "./_site/img/" });
        let imageAttributes = { alt, sizes, loading: "lazy", decoding: "async", };
    
        return eleventyImg.generateHTML(metadata, imageAttributes);
    });
    eleventyConfig.addCollection("courses", function(collectionApi) {
       return collectionApi.getFilteredByGlob('./content/kurzy-*.njk'); 
    });
    eleventyConfig.addNunjucksFilter("filterCourses", function(collection, filter) {
        if (filter) {
            const regex = new RegExp(filter);
            return collection.filter(course => regex.test(course.data.item.Code))
        }
        return collection;
    });
    
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    eleventyConfig.addDataExtension("csv", contents => parse(contents, { columns: true, skip_empty_lines: true }));

    return {
        dir: {
			input: "./content",          
			includes: "../_includes", 
            layouts: "../_layouts",
			data: "../_data",
			output: "./_site",
		},
        markdownTemplateEngine: "njk",
	}
}
