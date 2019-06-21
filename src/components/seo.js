import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Icon from './../images/logo.jpg'
import AppConfig from 'config/app'

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`${data.site.siteMetadata.title} - %s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `https://tourepedia.com`,
              },
              {
                property: `og:image`,
                content: AppConfig.siteUrl + Icon,
              },
              {
                property: `og:site_name`,
                content: data.site.siteMetadata.title,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `twitter:image`,
                content: AppConfig.siteUrl + Icon,
              },
              {
                itemprop: `name`,
                content: title,
              },
              {
                itemprop: `description`,
                content: metaDescription,
              },
              {
                itemprop: `image`,
                content: AppConfig.siteUrl + Icon,
              },
              {
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
              },
              {
                name: 'mobile-web-app-capable',
                content: 'yes',
              },
              {
                name: 'keywords',
                content: (keywords || [])
                  .filter(
                    item => data.site.siteMetadata.keywords.indexOf(item) === -1
                  )
                  .concat(data.site.siteMetadata.keywords)
                  .join(','),
              },
            ]
              .concat(meta)
              .concat(
                process.env.NODE_ENV === 'production'
                  ? [
                      {
                        name: 'google-site-verification',
                        content: process.env.GOOGLE_SITE_VERIFICATION,
                      },
                    ]
                  : []
              )}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
