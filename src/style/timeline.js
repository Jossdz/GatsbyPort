import styled from 'styled-components'

export const Time = styled.section`
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

export const Moment = styled.article`
	display: flex;
	flex-direction: row;
	border-left: 2px solid #3b3a55;
	padding-left: 2rem;
	div {
		padding-top: 1.4rem;
		display: flex;
		flex-direction: column;
		width: 300px;
	}
	small {
		color: #68537a;
		font-weight: 600;
		font-size: 0.8em;
	}
	@media only screen and (max-width: 800px) {
		div {
			width: 230px;
		}
	}
`