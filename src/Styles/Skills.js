import styled from "styled-components";

// KEYFRAMES

// STYLES
export const Wrapper = styled.div`
	padding-left: 50px;
	@media screen and (max-width: 768px) {
		padding-left: 10px;
	}
	> h1 {
		font-weight: 500;
		color: ${(props) => props.theme.font};
	}
`;

export const Flex = styled.div`
	width: 97%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		justify-content: space-around;
		width: 100%;
	}
	div:nth-last-child(-n + 6) {
		border: none;
		margin: 0 10px;
		&:before {
			display: none;
		}
	}
`;

export const Box = styled.div`
	width: 135px;
	height: 100%;
	margin: 10px;
	padding: 0 5px;
	background-color: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.font};
	align-self: center;
	justify-content: space-between;
	align-items: center;
	display: flex;
	border-bottom: 2px solid ${(props) => props.theme.font};
	transition: all 0.15s linear;
	box-shadow: 0px 0px 7px 0px rgb(204 204 204);
	position: relative;
	cursor: pointer;
	&:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		background-color: transparent;
		border-top: 15px solid ${(props) => props.theme.font};
		border-left: 15px solid transparent;
		transition: all 0.15s linear;
	}
	&:hover {
		box-shadow: 0px 0px 15px 0px rgb(154 154 154);
		transition: all 0.15s linear;
		border-bottom: 2px solid red;
	}
	&:hover:before {
		transition: all 0.15s linear;
		top: -3px;
		right: -3px;
		border-top: 15px solid red;
	}
	> img {
		width: 40px;
		height: 40px;
	}
	> p {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;
