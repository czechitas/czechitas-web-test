const eleventyImg = require("@11ty/eleventy-img");
const eleventyNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigation);
    eleventyConfig.addShortcode("image", async function(src, alt, sizes = []) {
        let file = "./content/assets/img/" + src
        let metadata = await eleventyImg(file, { widths: [300, 600], formats: ["avif", "jpeg"], outputDir: "./_site/img/" });
        let imageAttributes = { alt, sizes, loading: "lazy", decoding: "async", };
    
        return eleventyImg.generateHTML(metadata, imageAttributes);
    });

    return {
        dir: {
			input: "./content",          
			includes: "../_config/includes", 
            layouts: "../_config/layouts",
			data: "../_config/data",
			output: "./_site",
		},
	}
}
