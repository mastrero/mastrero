import React from "react";
import styled, { keyframes } from "styled-components";
import { Coffee } from "../Assets";

const progress = keyframes`
	0% {
		width: 0%;
	}
	100% {
		width: 100%;
	}
`;

const background = keyframes`
	0% {
		background-color: #ffffff;
	}
	90% {
		background-color: #e5e5e5;
	}
`;

const Div = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	z-index: 90;
	background-color: #c7c7c7;
	text-align: center;
	display: grid;
	place-items: center;
	animation: ${background} 1.5s linear;
`;

const LoadingWrapper = styled.div`
	width: 60vw;
	max-width: 350px;
`;

const Loading = styled.div`
	height: 2px;
	margin: 5px auto;
	background: black;
	border-radius: 50px;
	animation: ${progress} 1.5s linear 1;
`;

export default function Loader() {
	return (
		<Div>
			<div>
				<img src={Coffee} alt='Coffee' />
				<LoadingWrapper>
					<Loading />
					Brewing Coffee
				</LoadingWrapper>
			</div>
		</Div>
	);
}
