// console.log('.postcssrc.js: ', process.env.NODE_ENV);
module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('tailwindcss')('./pages/assets/css/tailwind.config.js'),
        process.env.NODE_ENV === 'production'
            ? require('@fullhuman/postcss-purgecss')({
                  content: ['./.tmp/parcel/**/*.html'],
                  extractors: [
                      {
                          extractor: (content) =>
                              content.match(/[A-Za-z0-9-_:\.\/]+/g) || [],
                          extensions: ['html', 'js'],
                      },
                  ],
              })
            : function () {
                  return []
              },
        require('autoprefixer'),
    ],
}
