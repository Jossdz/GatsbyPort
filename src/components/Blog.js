import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../style/Section'
import Card from '../style/Card'

const H0 = styled.h1`
  font-size: 2.5rem;
  color: white;
`

const Posts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

`

export default () => ( <StaticQuery
      query={
        graphql`
          query get_all_post{
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    excerpt
                    tags
                  }
                  fields {
                    slug
                  }
                  excerpt
                }
              }
            }
          }
        `
      }
      render={({allMarkdownRemark: {edges}}) => <div>
        <Section>
          <H0>Blog</H0>
        </Section>
        <Posts>
          {edges.map((edge, i) => 
            <Card {...edge.node.frontmatter} href={edge.node.fields.slug} key={i}/>
          )}
        </Posts>
      </div>
      }
    />)
  
