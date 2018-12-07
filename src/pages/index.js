import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Section from '../style/Section'
import Center from '../style/Center'
import { Moment, Time } from '../style/timeline'
import Skewed from '../style/Skewed'
import Logo from '../style/Logo'
import logo from '../images/Logo_w.svg'
import Line from '../images/line.svg'


const H0 = styled.h1`
	font-size: 5em;
	color: white;
	@media only screen and (max-width: 600px) {
		margin-top: 1em;
		font-size: 2.5rem;
	}
`
const H3 = styled.h3`
	font-size: 1.8em;
	color: ${props => (props.white) ? 'white' : '#68537a'};
	@media only screen and (max-width: 600px) {
		margin-top: 1.4em;
		font-size: 1.2rem;
		margin: 0.4em 0;
	}
`



const Home = ({data}) => {
	return (
	<Layout>
		<Section>
			<Logo src={logo} width='200' alt='jossDz logo' />
			<H0>Jose ( Joss ) Correa</H0>
			<H3 white>Js Developer - Ta at Ironhack</H3>
		</Section>

		<Center>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
				pariatur, blanditiis praesentium, mollitia fugit hic earum dolores iste
				error nulla culpa aliquid nesciunt? Tempora adipisci aut fugiat
				repellendus doloribus rem!
			</p>
			<h2>– Me</h2>
		</Center>
		<center>
			<h2>Timeline</h2>
		</center>
		<Time>
			{data.site.siteMetadata.events.map(({title, description, place, year}, i) => <Moment key={i}>
					<img src={Line} width='100' alt='moment' />
					<div>
						<h3>{title}</h3>
						<p style={{textAlign: 'justify', fontSize: '0.8em'}}>
							{description}
						</p>
						<small>
							{place} - {year}
						</small>
					</div>
				</Moment>)}
		</Time>
		<center style={{marginTop: '2em'}}>
			<H3>Current stack</H3>
		</center>
		<Skewed height='2'>
			<div><Image fluid={data.apollo.childImageSharp.fluid}/></div>
			<div><Image fluid={data.eslint.childImageSharp.fluid}/></div>
			<div><Image fluid={data.gatsby.childImageSharp.fluid}/></div>
			<div><Image fluid={data.github.childImageSharp.fluid}/></div>
			<div><Image fluid={data.graphql.childImageSharp.fluid}/></div>
			<div><Image fluid={data.js.childImageSharp.fluid}/></div>
			<div><Image fluid={data.npm.childImageSharp.fluid}/></div>
			<div><Image fluid={data.prettier.childImageSharp.fluid}/></div>
			<div><Image fluid={data.react.childImageSharp.fluid}/></div>
			<div><Image fluid={data.vscode.childImageSharp.fluid}/></div>
			<div><Image fluid={data.mongo.childImageSharp.fluid}/></div>
			<div><Image fluid={data.xd.childImageSharp.fluid}/></div>
		</Skewed>
	</Layout>
)}

export const query = graphql`
	query data{
		site{
			siteMetadata{
				events{
					title,
					place,
					description,
					year
				}
			}
		}
		apollo: file(relativePath: {eq: "apollo.png"}) {
    ...fluidImage
		}
		eslint: file(relativePath: {eq: "eslint.png"}) {
			...fluidImage
		}
		gatsby: file(relativePath: {eq: "gatsby.png"}) {
			...fluidImage
		}
		github: file(relativePath: {eq: "github.png"}) {
			...fluidImage
		}
		graphql: file(relativePath: {eq: "graphql.png"}) {
			...fluidImage
		}
		js: file(relativePath: {eq: "js.png"}) {
			...fluidImage
		}
		npm: file(relativePath: {eq: "npm.png"}) {
			...fluidImage
		}
		prettier: file(relativePath: {eq: "prettier.png"}) {
			...fluidImage
		}
		react: file(relativePath: {eq: "react.png"}) {
			...fluidImage
		}
		vscode: file(relativePath: {eq: "vscode.png"}) {
			...fluidImage
		}
		mongo: file(relativePath: {eq: "mongo.png"}) {
  	...fluidImage
  	}
		xd: file(relativePath: {eq: "xd.png"}) {
  	...fluidImage
  	}
	}
	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 200) {
				...images
			}
		}
	}

	fragment images on ImageSharpFluid {
  	base64
		tracedSVG
		aspectRatio
		src
		srcSet
		srcWebp
		srcSetWebp
		sizes
		originalImg
		originalName
	} 
`


export default Home