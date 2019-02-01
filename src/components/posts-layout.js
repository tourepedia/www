import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import SEO from './seo'
import Layout from './layout'

const Article = Styled.article`
  padding: 40px 0;
 > h1 {
    margin-bottom: 0;
 }
 > footer {
   padding: 15px 0 20px;
   border-top: 1px solid whitesmoke;
 }
`

export const PostLayout = ({ children, pageContext: { frontmatter } }) => (
  <Layout>
    <SEO
      title={`${frontmatter.title} - Blogs`}
      keywords={frontmatter.tags.split(',')}
    />
    <div className="container">
      <Article>
        <h1>{frontmatter.title}</h1>
        <p>
          <em>
            <a href={`mailto:${frontmatter.email}`}>{frontmatter.author}</a>
          </em>
        </p>
        <main>{children}</main>
        <footer>
          {frontmatter.tags.split(',').map(tag => (
            <code key={tag}>{tag}</code>
          ))}
        </footer>
      </Article>
    </div>
  </Layout>
)

PostLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object.isRequired,
}

export default PostLayout
