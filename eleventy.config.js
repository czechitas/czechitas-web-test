const eleventyImg = require("@11ty/eleventy-img");
const eleventyNavigation = require("@11ty/eleventy-navigation");
const yaml = require("js-yaml");
const { parse } = require('csv-parse/sync');
const { EleventyRenderPlugin } = require("@11ty/eleventy");

function imageShortcode(src, alt = '', cls = '', sizes = [], widths = [300, 600]) {
    let file = "./content/assets/img/" + src
	let options = { widths: widths, formats: ['jpeg'], outputDir: "./_site/img/", };
	eleventyImg(file, options);

	let imageAttributes = { class: cls, alt, sizes, loading: "lazy", decoding: "async", };
	let metadata = eleventyImg.statsSync(file, options);
	return eleventyImg.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigation);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addShortcode("renderVariable", async function (template, data) {
        const { renderTemplate } = eleventyConfig.javascriptFunctions;
        return await renderTemplate(template, 'njk', data );
    });
    eleventyConfig.addNunjucksShortcode("image", imageShortcode);
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
