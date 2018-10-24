import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Section = styled.section`
  background-color: crimson;
  padding: 5rem;
`

const IndexPage = () => (
  <Layout>
    <Section>
      <h1>Jose Carlos Correa</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Section>
  </Layout>
)

export default IndexPage
