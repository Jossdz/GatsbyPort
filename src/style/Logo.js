import styled from 'styled-components'

export default styled.img`
	transition: all inf linear;
	margin: 0;
	transform: scale(1.2);
	animation: beat 0.8s infinite alternate;
	@keyframes beat {
		to {
			transform: scale(1.25);
		}
	}
`
