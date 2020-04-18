const resolve = require('tailwindcss/resolveConfig')
const config = require('../../pages/assets/css/tailwind.config.js')
// console.log(Object.keys(resolve(config)))

module.exports = resolve(config)
