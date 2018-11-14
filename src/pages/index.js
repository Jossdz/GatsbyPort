import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Section from '../style/Section'
import Center from '../style/Center'
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
const H3 = styled.h1`
	font-size: 1.5em;
	color: white;
	@media only screen and (max-width: 600px) {
		margin-top: 1.4em;
		font-size: 1.2rem;
		margin: 0.4em 0;
	}
`

const Time = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: calc(5% + 150px);
	margin-top: 3rem;
	img {
		margin: -4px;
	}
	h3 {
		margin: 0;
		color: #3b3a55;
	}
	p {
		margin: 0;
	}
	@media only screen and (max-width: 800px) {
		padding-left: 0;
	}
`

const Moment = styled.article`
	display: flex;
	div {
		padding-top: 1.4rem;
		display: flex;
		flex-direction: column;
		width: 300px;
	}
	small {
		color: #68537a;
	}
	@media only screen and (max-width: 800px) {
		div {
			width: 230px;
		}
	}
`

const events = [
	{
		title: 'Computer systems engineer',
		place: 'TESI',
		description: 'I started studying engineering degree in computer systems.',
		year: '2013 - 2018',
	},
	{
		title: 'First Meetup',
		place: 'CDMX',
		description:
			'I attended my first meetup with the google community GDG IPN.',
		year: '2014',
	},
	{
		title: 'Black Belt Front-ent',
		place: 'Dev.f',
		description: `I completed the advanced front-end web development course, where I learned google web development and google's sprint design.`,
		year: '2017',
	},
	{
		title: 'English for the global citizen',
		place: 'UBC',
		description:
			'I studied English at UBC in BC, Canada for a couple of months.',
		year: '2017',
	},
	{
		title: 'Aprende Ti',
		place: 'CDMX',
		description:
			`I taught my first class about 'react' as a professional developer.`,
		year: '2017',
	},
	{
		title: 'Teacher Assistant',
		place: 'Ironhack Mex',
		description:
			'I work at Ironhack as an assistant professor, taking charge of the technical admissions process and mentoring the students through their learning to become a fullstack devs.',
		year: '2017',
	},
]

const IndexPage = () => (
	<Layout>
		<Section>
			<Logo src={logo} width='200' alt='jossDz logo' />
			<H0>Jose ( Joss ) Correa</H0>
			<H3>Js Developer - Ta at Ironhack</H3>
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
			{events.map(({title, description, year, place}, i) => (
				<Moment key={i}>
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
				</Moment>
			))}
		</Time>
	</Layout>
)

export default IndexPage
