class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\.\/]+/g) || []
    }
}

module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('tailwindcss')('./src/pages/assets/css/tailwind.config.js'),
        process.env.NODE_ENV === 'production'
            ? require('@fullhuman/postcss-purgecss')({
                  content: ['./.tmp/parcel/**/*.html'],
                  extractors: [
                      {
                          extractor: TailwindExtractor,
                          extensions: ['html', 'js']
                      }
                  ]
              })
            : function() {
                  return []
              },
        require('autoprefixer')
    ]
}
