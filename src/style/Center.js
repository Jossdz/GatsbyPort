import styled from 'styled-components'
import React from 'react'

const Cen = styled.div`
	margin-top: -3em;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 5rem 8rem;
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
