const siteData = require('./src/config/app')

const activeEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const config = {
  siteMetadata: {
    ...siteData,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tourepedia',
        short_name: 'Tourepedia',
        start_url: '/?from=mobile',
        background_color: '#6C63FF',
        theme_color: '#6C63FF',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          posts: require.resolve(`${__dirname}/src/components/posts-layout.js`),
          default: require.resolve(`${__dirname}/src/components/layout.js`),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-plugin-react-svg',
    `gatsby-plugin-sitemap`,
  ],
}

if (activeEnv === 'production') {
  config.plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
    },
  })
}

module.exports = config
