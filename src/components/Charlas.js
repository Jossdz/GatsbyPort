import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'

import Section from '../style/Section'
import TalkCard from '../style/TalkCard'

const GET_TALKS = graphql`
  query GET_TALKS {
    site{
      siteMetadata{
        talks{
          place
          date(formatString: "DD MMMM, YYYY")
          title
          abstract
          slides
          tags
          id
        }
      }
    }
  }
`

const Posts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2.5em;
  @media only screen and (max-width: 600px) {
		padding: 0 1em;
	}
`


const H0 = styled.h1`
  font-size: 2.5rem;
  color: white;
`

const Charlas = () => <div>
    <Section><H0>Presentaciones</H0></Section>
    <StaticQuery
      query={GET_TALKS}
      render={data => {
        const talks = data.site.siteMetadata.talks
        return <Posts>
          {talks.map(talk => <TalkCard key={talk.id} {...talk}/>)}
        </Posts>
      }}
    />
  </div>

export default Charlas