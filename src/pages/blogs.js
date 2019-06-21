import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from 'components/layout'
import Styled from 'styled-components'

import StopPropagation from 'components/StopPropagation'
import SEO from 'components/seo'

const Main = Styled.main`
  padding: 40px 0 60px;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & > ul > li {
    padding: 1.2rem 0;
    > a {
      color: inherit;
      text-decoration: none;
    }
    h3 {
      margin: 0;
    }
  }

  & > ul > li + li {
    border-top: 1px solid whitesmoke;
  }
`
const Header = Styled.header`
  margin-bottom: 40px;
  text-align: center;
  h2 {
    font-weight: bold;
    margin: 0 0 20px;
    font-size: 2rem;
  }
  p {
    color: #333;
    margin: 0;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blogs"
      description="Read blogs related to places and tours to get inspiration and knowledge about places in the world"
      keywords={['tourepedia', 'travel', 'blogs', 'travel', 'inspirations']}
    />
    <div className="container">
      <Main role="main">
        <Header>
          <h2>Travel Inspirational Blogs</h2>
        </Header>
        <ul>
          {data.allMdx.edges.map(
            ({ node: { id, fields, frontmatter, excerpt, timeToRead } }) => (
              <li key={id}>
                <Link to={`/blogs/@${frontmatter.username}/${fields.slug}`}>
                  <h3>{frontmatter.title}</h3>
                  <div>
                    <small>
                      <StopPropagation>
                        <em>
                          <a href={`mailto:${frontmatter.email}`}>
                            {frontmatter.author}
                          </a>{' '}
                          • {timeToRead} min read
                        </em>
                      </StopPropagation>
                    </small>
                  </div>
                  <p>{excerpt}</p>
                  {frontmatter.tags.split(',').map(tag => (
                    <code key={tag}>{tag}</code>
                  ))}
                </Link>
              </li>
            )
          )}
        </ul>
      </Main>
    </div>
  </Layout>
)

export default IndexPage
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogsListQuery {
    allMdx(sort: { fields: [fields___createdAt], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            author
            email
            username
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
