import styled from 'styled-components'
import React from 'react'

const ContentBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${props => props.justify};
  width: 100%;
	flex-direction: row;
	p {
		text-align: justify;
	}
  Link{
   	width: 100%;
    max-width: 15rem;
    text-decoration: none;
  }
	@media only screen and (max-width: 600px) {
		margin: 1.8em 0;
		padding: 0 2rem;
    flex-direction: column;
		h1 {
			margin: 0;
		}
	}
`
export default ContentBox
