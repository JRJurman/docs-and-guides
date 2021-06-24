module.exports = function (eleventyConfig) {
    return {
        dir: {
            includes: '_includes',
            input: 'docs',
            layouts: '_layouts',
            output: '_site',
        },
        // Allows using markup and EJS features in markdown
        markdownTemplateEngine: 'ejs',
        templateFormats: [
            'ejs',
            'md',
        ],
    };
};