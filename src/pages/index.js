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
import apollo from '../images/apollo.png'
import eslint from '../images/eslint.png'
import gatsby from '../images/gatsby.png'
import github from '../images/github.png'
import graphqlimg from '../images/graphql.png'
import js from '../images/js.png'
import npm from '../images/npm.png'
import prettier from '../images/prettier.png'
import react from '../images/react.png'
import vscode from '../images/vscode.png'
import mongo from '../images/mongo.png'
import xd from '../images/xd.png'

const Images = [
	apollo,
	eslint,
	gatsby,
	github,
	graphqlimg,
	js,
	npm,
	prettier,
	react,
	vscode,
	mongo,
	xd,
]
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
			<Logo src={logo} width='200' alt='jossdz_logo' />
			<H0>Jose ( Joss ) Correa</H0>
			<H3 white>Js Developer - Ta at Ironhack</H3>
		</Section>

		<Center>
			<p>
				Mi nombre es Jose Carlos, pero todos en la industria tech me conocen como <b>'Joss'</b>. Soy un desarrollador <b>fullstack</b>, he estado durante muchos años involucrado en comunidades de desarrollo web y tecnologías de la información. Me encanta aprender, enseñar y colaborar con personas en el entorno. Actualmente trabajo en Ironhack como maestro asistente para aportar a la educación en tecnología y a su vez escribo y preparo contenido para complementar mi misión de compartir conocimiento online y en pláticas de comunidades.
			</p>
		</Center>
		<Center>
			<h2>Contenido</h2>
			<p>Revisa mi contenido:</p>
			<div>
			<button>Presentaciones</button>
			<button>Blog</button>
			</div>
		</Center>
		<center>
			<h2>Historia</h2>
		</center>
		<Time>
			{data.site.siteMetadata.events.map(({title, description, place, year}, i) => <Moment key={i}>
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
			<H3>Stack actual</H3>
		</center>
		<Skewed height='1'>
			{Images.map((img, i) => <div key={i}><img src={img} key={i*23} alt={`${img}_logo`}/></div>)}
		</Skewed>
	</Layout>
)}

export const query = graphql`
	query {
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