const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
  baseUrl: process.env.PUBLIC_URL,
  pagesDirectory: path.join(__dirname, 'out'),
  targetDirectory: 'out/',
  nextConfigPath: path.join(__dirname, 'next.config.js'),
  ignoreIndexFiles: true,
  ignoredPaths: ['static', '404', '*.xml', '_next'],
})
