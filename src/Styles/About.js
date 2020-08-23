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

const slideLeft = keyframes`
	from {
		transform: translate3d(-10%, 0, 0);
		visibility: 'visible';
	}
	to {
		transform: translate3d(0, 0, 0);
	}
`;

// Styles
export const Buttons = styled.div`
	width: 16vw;
	margin: 0 auto;
	margin-top: 20px;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;
export const Button = styled.button`
	width: 100%;
	height: 100%;
	min-width: 180px;
	padding: 15px 0;
	cursor: pointer;
	font-size: 16px;
	font-family: "Segoe UI";
	position: relative;
	z-index: 15;
	background-color: ${(props) => props.theme.font};
	color: ${(props) => props.theme.bg};
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	border-radius: 5px;
	box-shadow: 0 2.5px 3.4px -15px rgba(0, 0, 0, 0.074), 0 5.7px 7.7px -15px rgba(0, 0, 0, 0.108),
		0 9.9px 13.4px -15px rgba(0, 0, 0, 0.133), 0 15.8px 21.3px -15px rgba(0, 0, 0, 0.155),
		0 24.3px 32.8px -15px rgba(0, 0, 0, 0.177), 0 38px 51.3px -15px rgba(0, 0, 0, 0.202),
		0 63.1px 85.1px -15px rgba(0, 0, 0, 0.236), 0 126px 170px -15px rgba(0, 0, 0, 0.31);
	&:after {
		content: "→";
		transform: translateX(3px);
	}
	&:hover&:after {
		transform: translateX(15px);
	}
`;

export const Image = styled.img`
	position: absolute;
	bottom: 0;
	z-index: 10;
	@media screen and (max-width: 768px) {
		// bottom: 35px;
	}
`;

export const Content = styled.div`
	padding: 16vh 0 0 50px;
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
