import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Bar = styled.div`
	background: #232323;
	margin-bottom: 1.45rem;
`

const Header = ({siteTitle}) => (
	<Bar>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
			}}
		>
			<h1 style={{margin: 0}}>
				<Link
					to='/'
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</Bar>
)

export default Header
