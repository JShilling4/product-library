module.exports = {
    configureWebpack: (config) => {
        config.devtool = "source-map";
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
                `,
                sourceMap: true,
            },
        },
        sourceMap: true,
    },

    devServer: {
        host: "localhost",
    },
};
