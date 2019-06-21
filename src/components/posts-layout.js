import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import StopPropagation from 'components/StopPropagation'

import SEO from './seo'
import Layout from './layout'

const Article = Styled.article`
  padding: 40px 0;
  max-width: 680px;
  margin: auto;
 > h2 {
    margin-bottom: 0;
		font-size: 2rem;
 }
 > footer {
   padding: 15px 0 20px;
   border-top: 1px solid whitesmoke;
 }
`

export const PostLayout = ({
  children,
  pageContext: { frontmatter, timeToRead },
}) => (
  <Layout>
    <SEO
      title={`${frontmatter.title} - Blogs`}
      keywords={frontmatter.tags.split(',')}
    />
    <div className="container">
      <Article>
        <h2>{frontmatter.title}</h2>
        <p>
          <small>
            <StopPropagation>
              <em>
                <a href={`mailto:${frontmatter.email}`}>{frontmatter.author}</a>
              </em>
            </StopPropagation>
          </small>
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
