import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Section from '../style/Section'

const H0 = styled.h1`
  font-size: 2.5rem;
  color: white;
`

export default ({data}) => {
  console.log(data)
  return <div>
    <Section>
      <H0>Blog</H0>
    </Section>
  </div>
  }

export const get_all_post = graphql`
  query get_all_post{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
            excerpt
          }
        }
      }
    }
  }
`