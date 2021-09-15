module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/travel-food/'
        : '/',
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/styles/base.sass";`
            },
        }
    },

}