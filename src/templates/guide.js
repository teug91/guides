import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'
import { Layout } from '../components'

const Margin = styled.div`
    margin: 16px 24px;
`

const Content = styled.div`
    padding: 32px;
    p {
        line-height: 1.5rem;
        margin-block-start: 1.5em;
        margin-block-end: 1.5em;
    }
    .vscode-highlight-code {
        font-size: 14px;
        overflow: hidden;
    }
    .vscode-highlight-line-highlighted {
        background-color: rgba(255, 255, 255, 0.1);
    }
`

const guide = ({ data }) => {
    const { html } = data.markdownRemark

    return (
        <Layout>
            <Margin>
                <Card>
                    <Content dangerouslySetInnerHTML={{ __html: html }} />
                </Card>
            </Margin>
        </Layout>
    )
}

export default guide

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
        }
    }
`
