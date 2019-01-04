import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Section from '../style/Section'
import { white } from 'ansi-colors';

const Pad = styled.article`
  padding: 2rem 12rem;
  text-align: center;
  @media only screen and (max-width: 600px) {
    padding: 6rem 1rem;
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
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  p{
    text-align: justify;
  }
  a{
    color:#68537B;
    cursor: pointer;
  }
  ul > li{
    text-align: initial;
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
  console.log(post)
  return (
    <Layout>
      <section>
      <Section>
        <H0>{post.frontmatter.title}</H0>
        <small style={{color: 'whitesmoke'}}>{post.frontmatter.date}</small>
      </Section>
        <Pad>        
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.medium && <a href={post.frontmatter.medium}><img width='80' src="https://image.flaticon.com/icons/svg/511/511217.svg" alt="claps"/></a>}
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
        medium
        date
      }
    }
  }
`