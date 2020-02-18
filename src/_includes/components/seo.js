const siteData = require('./../../_data/site')

function seo({ title, description }) {
  return `
    <title>${title}</title>
    ${description ? `<meta name="description" content="${description}" />` : ''}
    <meta property="og:title" content="${title}" />
    ${
      description
        ? `<meta property="og:description" content="${description}" />`
        : ''
    }
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Tourepedia Pvt Ltd" />
    <meta property="og:url" content="${siteData.publicUrl}" />
    <meta property="og:image"content={${siteData.publicUrl}/static/logo.jpg}/>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tourepedia" />
    <meta name="twitter:title" content="${title}" />
    ${
      description
        ? `<meta name="twitter:description" content="${description}" />`
        : ''
    }
    <meta name="twitter:creator" content="@sudhirmith" />
    <meta name="twitter:image"content={${siteData.publicUrl}/static/logo.jpg}/>
  `
}

module.exports = seo
