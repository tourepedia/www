const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(sort: { fields: [fields___createdAt], order: DESC }) {
              edges {
                node {
                  parent {
                    ... on File {
                      name
                      absolutePath
                    }
                  }
                  frontmatter {
                    username
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          const path = `/blogs/@${node.frontmatter.username}/${
            node.fields.slug
          }`
          createPage({
            path: path,
            component: node.parent.absolutePath, //blogPost,
            context: { absPath: node.parent.absolutePath },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = node.frontmatter.title
      .toLowerCase()
      .split(' ')
      .join('-')
    const createdAt = getNode(node.parent).birthTime
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `createdAt`,
      value: createdAt,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
