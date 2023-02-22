module.exports = {
  publicPath: '/',
  devServer: {
    port: 7000,
  },
  chainWebpack: (config) => {
    // pug
    const pugRule = config.module.rule('pug')
    pugRule
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@css': '@/assets/css',
        '@mix': '@/assets/mixins',
        '@js': '@/assets/js',
        '@api': '@/api',
        '@router':'@/router'
      },
    },
  },
  productionSourceMap: false,
}
