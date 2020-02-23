const { spreadProps } = require('./utils')
const siteData = require('../../_data/site')

module.exports = function link(content, { href, ...props } = {}) {
  return `<a href="${siteData.publicUrl}${
    siteData.isAmp ? siteData.ampDir : ''
  }${href}" ${spreadProps(props)}>${content}</a>`
}
