import styled from "styled-components";

export const Container = styled.aside`
	width: 20vw;
	min-width: 300px;
	height: 100vh;
	background-color: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.font};
	box-shadow: -1px 0px 20px 0px rgb(160 160 160 / 62%);
	transition: position 0.3s linear;
	position: sticky;
	z-index: 30;
	top: 0;
	overflow-y: auto;
	@media screen and (max-width: 768px) {
		transform: ${(props) => (props.show ? `translateX(0%)` : `translateX(-88%)`)};
		transition: all 0.3s linear;
		box-shadow: 2px -1px 2px 0px rgb(160 160 160 / 62%);
		position: fixed;
	}
`;

export const NavList = styled.nav`
	margin: 0 auto;
	padding: 0 0 0 35px;
	display: flex;
	flex-direction: column;
`;
export const NavListItem = styled.a`
	color: ${(props) => props.theme.font};
	margin-top: 25px;
	font-size: 20px;
	cursor: pointer;
	text-decoration: none;
	position: relative;
	transition: all 0.5s linear;
	-webkit-tap-highlight-color: transparent;
	&:before {
		content: "";
		position: absolute;
		top: 28px;
		width: 25%;
		height: 2px;
		background: none;
		transition: all 0.2s linear;
	}
	&.active {
		position: relative;
		font-weight: 500;
	}
	&.active&:before {
		background-color: ${(props) => props.theme.font};
		width: 100%;
	}
	&:after {
		content: "";
		position: absolute;
		right: 3px;
		width: 25px;
		height: 25px;
		background-image: url(${(props) => props.icon});
		background-size: 25px 25px;
		transition: all 0.2s linear;
	}
	&.active&:after {
		width: 30px;
		height: 30px;
		background-size: 30px 30px;
	}
`;

export const Themer = styled.div`
	font-size: 20px;
	margin: 35px 0 0 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
export const ThemeIcon = styled.div`
	width: 30px;
	height: 30px;
	background-image: url(${(props) =>
		props.theme.type === "light"
			? "https://img.icons8.com/color/48/000000/sun.png"
			: "https://img.icons8.com/plasticine/50/000000/crescent-moon.png"});
	background-size: 30px 30px;
	transition: all 0.3s linear;
`;

export const NavMenu = styled.a`
	&,
	&:after,
	&:before {
		width: 25px;
		height: 3px;
		background-color: ${(props) => props.theme.font};
		transition: all 0.3s linear;
		z-index: 35;
		cursor: pointer;
	}
	&:after,
	&:before {
		content: "";
		position: absolute;
	}
	& {
		position: absolute;
		top: 15px;
		left: 269px;
	}
	&:after {
		top: 8px;
	}
	&:before {
		top: -8px;
	}
	${(props) =>
		props.show &&
		`& {
			transform: rotate(-45deg);
			transform-origin: 57%;
		}
		&:after {
			opacity: 0;
			background: none;
		}
		&:before {
			transform: rotate(90deg);
			transform-origin: 32% 5px;
		}`}
	@media screen and (min-width: 768px) {
		display: none;
	}
`;
