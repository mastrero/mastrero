import styled, { keyframes } from "styled-components";

// Keyframes
const fadeDown = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
	}
	to {
		opacity: 1;
		transform: 'none';
	}
`;

const fadeUp = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, 100%, 0);
	}
	to {
		opacity: 1;
		transform: 'none';
	}
`;

const slideLeft = keyframes`
	from {
		transform: translate3d(-10%, 0, 0);
		visibility: 'visible';
	}
	to {
		transform: translate3d(0, 0, 0);
	}
`;

export const MainSection = styled.section`
	height: 100%;
	background-color: ${(props) => props.theme.bg};
	position: relative;
	@media screen and (max-width: 768px) {
		padding-left: 40px;
	}
`;

export const Image = styled.img`
	position: absolute;
	bottom: 0;
	animation: ${fadeUp} 0.85s ease-out 0s 1;
	@media screen and (max-width: 768px) {
		bottom: 35px;
	}
`;

export const Content = styled.div`
	padding: 18% 0 0 50px;
	color: ${(props) => props.theme.font};
	@media screen and (max-width: 768px) {
		padding: 25% 0 0 10px;
	}
	> h1 {
		animation: ${fadeDown} 0.85s ease-out 0s 1;
	}
	> h3 {
		animation: ${slideLeft} 0.5s ease-out 0s 1;
	}
	> p {
		animation: ${slideLeft} 0.68s ease-out 0s 1;
	}
`;
