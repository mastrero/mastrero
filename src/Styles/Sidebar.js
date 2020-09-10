import styled from "styled-components";

export const Container = styled.aside`
	min-width: 220px;
	height: 100vh;
	background-color: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.font};
	box-shadow: -1px 0px 20px 0px rgb(160 160 160 / 62%);
	transition: position 0.3s linear;
	// position: sticky;
	z-index: 30;
	top: 0;
	overflow-y: auto;
	@media screen and (max-width: 768px) {
		transform: ${(props) => (props.show ? `translateX(0%)` : `translateX(-85%)`)};
		transition: all 0.3s linear;
		box-shadow: 2px -1px 2px 0px rgb(160 160 160 / 62%);
		position: fixed;
	}
`;

export const NavList = styled.nav`
	padding: 0 5px;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		padding-right: 0;
	}
`;
export const NavListItem = styled.a`
	color: ${(props) => props.theme.font};
	margin-top: 10px;
	padding: 5px 5px;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;

	&:hover,
	&.active {
		background: #989898;
		color: ${(props) => props.theme.bg};
		border-radius: 0;
	}
	> span {
		font-size: 1.05rem;
	}
	> img {
		width: 25px;
		height: 25px;
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
		left: 191px;
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
