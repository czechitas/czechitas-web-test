module.exports = {
    eleventyNavigation: {
        title: (data) => data.eleventyNavigation.title || data.title,
        key: (data) => data.eleventyNavigation.key || ('home' + data.page.url).split("/").slice(0, -1).join('~'),
        parent: (data) => data.eleventyNavigation.parent || ('home' + data.page.url).split("/").slice(0, -2).join('~'),
    },
};
