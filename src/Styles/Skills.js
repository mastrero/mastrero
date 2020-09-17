import styled from "styled-components";

// KEYFRAMES

// STYLES
export const Wrapper = styled.div`
	padding-left: 50px;
	text-align: center;
	@media screen and (max-width: 768px) {
		padding-left: 10px;
	}
	> h1 {
		font-weight: 500;
		color: ${(props) => props.theme.font};
	}
`;

export const Flex = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const Box = styled.div`
	height: 100%;
	margin: 5px;
	padding: 5px;
	background-color: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.font};
	align-self: center;
	justify-content: space-between;
	align-items: center;
	display: flex;
	transition: all 0.15s linear;
	box-shadow: 0px 0px 7px 0px rgb(204 204 204);
	position: relative;
	> span {
		padding: 0 5px;
	}
	> img {
		width: 25px;
		height: 25px;
	}
`;
