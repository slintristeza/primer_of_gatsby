const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allStudyYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allStudyYaml.edges.map(edge => {
      const study = edge.node
      console.log("Create Page", `/studys/${study.slug}`)
      createPage({
        path: `/studys/${study.slug}`,
        component: path.resolve("./src/templates/study.js"),
        context: {
          slug: study.slug,
        },
      })
    })
  })
}
