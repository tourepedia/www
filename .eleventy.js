const { DateTime } = require('luxon')
const svgContents = require('eleventy-plugin-svg-contents')
const ampPlugin = require('@ampproject/eleventy-plugin-amp')
const htmlmin = require('html-minifier')
const siteData = require('./src/_data/site')

const isAmp = process.env.AMP
const inputDir = 'src'

const componentsDir = `${inputDir}/_includes/components`

// components
const seo = require(`./${componentsDir}/seo.js`)
const button = require(`./${componentsDir}/button.js`)
const {
  formStyles,
  input,
  textarea,
  formGroup,
} = require(`./${componentsDir}/form.js`)
const { container, row, col, rowStyles } = require(`./${componentsDir}/grid.js`)

module.exports = config => {
  // custom plugins
  config.addPlugin(svgContents)
  if (isAmp) {
    config.addPlugin(ampPlugin)
  }

  // components
  config.addShortcode('seo', seo)
  config.addShortcode('button', button)
  config.addShortcode('input', input)
  config.addShortcode('formStyles', formStyles)
  config.addShortcode('textarea', textarea)

  // wrapper components
  config.addPairedShortcode('formGroup', formGroup)
  config.addPairedShortcode('container', container)
  config.addPairedShortcode('row', row)
  config.addShortcode('rowStyles', rowStyles)
  config.addPairedShortcode('col', col)

  // copy/paste static assets
  config.addPassthroughCopy('static')

  // custom transformers
  config.addTransform('htmlmin', function(content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJs: true,
        minifyCSS: true,
      })
      return minified
    }
    return content
  })

  if (isAmp) {
    config.addTransform('noSitemapWhenAmp', function(content, outputPath) {
      if (outputPath.endsWith('sitemap.xml')) {
        return ''
      }
      return content
    })
  }

  // filters
  config.addFilter('date', (dateObj, format) => {
    return DateTime.fromJSDate(dateObj).toFormat(format)
  })

  config.addFilter('publicUrl', url => {
    return siteData.publicUrl + url
  })

  return {
    dir: {
      input: inputDir,
      output: isAmp ? 'build/amp' : 'build',
    },
  }
}
