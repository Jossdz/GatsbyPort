import styled from 'styled-components'
import React from 'react'

const Cen = styled.div`
	height: 20rem;
	margin-top: -3em;
	padding-top: 3em;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 12rem 8rem 4rem 8rem;
	p {
		text-align: justify;
	}
	@media only screen and (max-width: 600px) {
		margin: 1.8em 0;
		padding: 0 2rem;
		h1 {
			margin: 0;
		}
	}
`
export default ({children}) => <Cen>{children}</Cen>
