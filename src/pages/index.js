import React from 'react'
import { graphql } from 'gatsby'
import { GuideCards } from '../components'

const IndexPage = ({ data }) => {
    const guides = data.allMarkdownRemark.edges.map(({ node }) => ({
        path: node.fields.slug,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
    }))

    return <GuideCards guides={guides} />
}

export default IndexPage

export const listQuery = graphql`
    query ListQuery {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___index] }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                    }
                }
            }
        }
    }
`
