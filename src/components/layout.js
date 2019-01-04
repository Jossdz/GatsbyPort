import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import './layout.css'
import {bubble as Menu} from 'react-burger-menu'
import {Link} from 'gatsby'
import Footer from '../style/Footer'

const MenuS = styled(Menu)`
	a:visited {
		color: white;
		text-decoration: none;
	}
`

const Layout = ({children}) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{name: 'Portafolio profesional, Jose Carlos Correa (jossdz)', content: 'Sample'},
						{name: 'keywords', content: 'portafolio, fullstack, javascript'},
					]}
				>
					<html lang='es' />
				</Helmet>
				<div id='outer-container'>
					<MenuS pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
						<Link to='/'>Inicio</Link>
						<br />
						<Link to='/blog'>Blog</Link>
						<br />
						<Link to='/charlas'>Charlas</Link>
						<br />
						<Link to='/'>Contacto</Link> 
					</MenuS>
					<main id='page-wrap' style={{marginBottom: '5em'}}>{children}</main>
					<Footer></Footer>
				</div>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
