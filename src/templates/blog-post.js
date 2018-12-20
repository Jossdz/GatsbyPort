import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import Section from '../style/Section'

const Pad = styled.article`
  padding: 5rem;
  @media only screen and (max-width: 600px) {
    padding: 5rem 1rem;
  }
  .side{
    float: left;
    margin: 1rem;
    @media only screen and (max-width: 600px) {
      float: none;
      margin: 0;
    }
  }
  pre {
    width: 100%;
    overflow-x: scroll;
  }
  p{
    text-align: justify;
  }
`

const H0 = styled.h1`
  font-size: 2.5rem;
  color: white;
  @media only screen and (max-width: 600px) {
   font-size: 1.8rem;
   text-align: center;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <section>
      <Section><H0>{post.frontmatter.title}</H0></Section>
        <Pad>        
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Pad>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`