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
export const Button = styled.button`
	width: 190px;
	padding: 8px 0;
	margin-left: 50px;
	cursor: pointer;
	font-size: 20px;
	font-family: "Segoe UI";
	z-index: 15;
	background-color: ${(props) => props.theme.font};
	color: ${(props) => props.theme.bg};
	display: flex;
	justify-content: center;
	outline: none;
	border: none;
	border-radius: 5px;
	box-shadow: 0 2.5px 3.4px -15px rgba(0, 0, 0, 0.074), 0 5.7px 7.7px -15px rgba(0, 0, 0, 0.108),
		0 9.9px 13.4px -15px rgba(0, 0, 0, 0.133), 0 15.8px 21.3px -15px rgba(0, 0, 0, 0.155),
		0 24.3px 32.8px -15px rgba(0, 0, 0, 0.177), 0 38px 51.3px -15px rgba(0, 0, 0, 0.202),
		0 63.1px 85.1px -15px rgba(0, 0, 0, 0.236), 0 126px 170px -15px rgba(0, 0, 0, 0.31);
	&:after {
		content: "→";
		transform: translateX(5px);
	}
	&:hover&:after {
		transform: translateX(15px);
	}
`;

export const Image = styled.img`
	position: absolute;
	bottom: 0;
	z-index: 5;
`;

export const Content = styled.div`
	padding: 10vh 0 0 50px;
	color: ${(props) => props.theme.font};
	@media screen and (max-width: 768px) {
		padding: 8vh 0 0 10px;
	}
	> h1 {
		animation: ${fadeDown} 0.85s ease-out 0s 1;
	}
	> h2 {
		animation: ${slideLeft} 0.5s ease-out 0s 1;
		font-weight: 500;
		margin: 0;
	}
	> p {
		animation: ${slideLeft} 0.68s ease-out 0s 1;
		margin: 0 0 10px 0;
	}
`;

export const Details = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	position: absolute;
	bottom: 0px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const DetailsItem = styled.article`
	padding: 0.5rem 1rem;
	flex: 1 1 250px;
	opacity: 0.8;
	position: relative;
	border-top: 3px solid ${(props) => props.theme.font + "55"};
	transition: all 0.3s linear;
	color: ${(props) => props.theme.font};
	&:after {
		content: "";
		position: absolute;
		top: -4px;
		left: 0;
		height: 0px;
		width: 0%;
		background: ${(props) => props.theme.font};
		transition: all 0.15s linear;
	}
	&:before {
	}
	&:hover,
	&:focus {
		opacity: 1;
	}
	&:hover::after,
	&:focus::after {
		height: 4px;
		width: 100%;
	}
	> h2 {
		letter-spacing: 0.03em;
		text-transform: uppercase;
		margin-bottom: 1rem;
		font-size: 1em;
		margin: 8px 0;
	}
	> p {
		line-height: 1.3;
		margin: 0;
		text-align: justify;
	}
	@media screen and (max-width: 768px) {
		padding: 0.3rem 0.6rem;
	}
`;
