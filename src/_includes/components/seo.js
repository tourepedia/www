const siteData = require('./../../_data/site')

function seo({ title, description }) {
  return `
    ${titleMeta(title)}
    ${descriptionMeta(description)}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Tourepedia Pvt Ltd" />
    <meta property="og:url" content="${siteData.publicUrl}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tourepedia" />
    <meta name="twitter:creator" content="@sudhirmith" />
    ${imageMeta('logo.jpg')}
  `
}

function titleMeta(title) {
  if (!title) return ''
  return `
    <title>${title}</title>
    <meta name="twitter:title" content="${title}" />
    <meta property="og:title" content="${title}" />
  `
}

function descriptionMeta(description) {
  if (!description) return ''
  return `
  <meta name="description" content="${description}" />
  <meta name="twitter:description" content="${description}" />
  <meta property="og:description" content="${description}" />`
}

function imageMeta(img) {
  if (!img) return ''
  return `
    <meta name="twitter:image"content="${siteData.publicUrl}/static/images/${img}"/>
    <meta property="og:image"content="${siteData.publicUrl}/static/images/${img}"/>
  `
}

module.exports = seo
