import styled from "styled-components";

// KEYFRAMES

// STYLES
export const SkillsWrapper = styled.div`
	padding-left: 35px;
	> h1 {
		font-weight: 500;
		color: ${(props) => props.theme.font};
	}
`;

export const SkillsFlex = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		width: 80%;
		justify-content: center;
	}
	div:nth-last-child(-n + 3):before {
		display: none;
	}
`;

export const SkillBox = styled.div`
	width: 130px;
	height: 100%;
	margin: 10px;
	padding: 0 10px;
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
`;
