import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import './layout.css'
import {bubble as Menu} from 'react-burger-menu'
import {Link} from 'gatsby'

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
						{name: 'description', content: 'Sample'},
						{name: 'keywords', content: 'sample, something'},
					]}
				>
					<html lang='en' />
				</Helmet>
				<div id='outer-container'>
					<MenuS pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
						<Link to='/'>Home</Link>
						<br />
						<Link to='/blog'>Blog</Link>
						<br />
						<Link to='/'>Talks</Link>
						<br />
						<Link to='/'>Contact</Link>
						<br />
						<Link to='/'>Mentorship</Link>
					</MenuS>
					<main id='page-wrap'>{children}</main>
				</div>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
