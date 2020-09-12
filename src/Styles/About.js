import styled from "styled-components";

// Styles
export const TopBar = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 0 0 10px;
	height: 45px;
`;

export const Logo = styled.img`
	width: 140px;
`;

export const Banner = styled.div`
	height: 100%;
	padding-top: 50px;
	display: flex;
	flex-wrap: wrap;
	background-color: var(--about-bg);
	justify-content: space-between;
	align-items: flex-end;
`;

export const Content = styled.div`
	width: 55%;
	padding: 10px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
	> h1 {
		margin: 1.25rem 0;
		font-style: normal;
		font-weight: 700;
		line-height: 36px;
		font-size: 2.25rem;
	}
	> h2 {
		font-weight: 600;
		line-height: 36px;
		font-size: 24px;
		> span {
			color: var(--typed-font);
			font-size: 24px;
		}
	}
	> p {
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;
	}
`;

export const Image = styled.img`
	flex-grow: 5;
`;

export const Links = styled.div`
	padding: 5px;
	display: flex;
	justify-content: center;
`;

export const Link = styled.button`
	padding: 1px;
	font-size: 18px;
	margin: 0 10px;
	background-color: transparent;
	box-sizing: border-box;
	cursor: pointer;
	outline: 0;
	border: none;
	border-bottom: 2px solid #a5a5a5;
	&:hover {
		border-color: var(--typed-font);
		color: var(--typed-font);
	}
`;

export const ModelWrapper = styled.div`
	position: absolute;
	margin: 0 auto;
	width: 100%;
	height: 100%;
	top: 0;
	background-color: rgba(255, 255, 255, 0.5);
	display: none;
	&.show {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Model = styled.div`
	width: 0;
	padding: 10px;
	min-width: 0px;
	background-color: #fff;
	position: relative;
	border-radius: 5%;
	box-shadow: 0px 0px 10px 0px #777777;
	> p {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		text-align: center;
	}
	&.show {
		width: 40%;
		min-width: 350px;
	}
`;

export const ModelHeading = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	box-shadow: 0px 0px 5px 0px #777777;
	cursor: pointer;
	position: absolute;
	right: 0px;
	top: 0%;
`;

export const CloseModel = styled.div`
	&,
	&:after {
		width: 22px;
		height: 2px;
		background-color: black;
		position: absolute;
	}
	& {
		transform: rotate(45deg);
		top: 50%;
		right: 15%;
	}
	&:after {
		content: "";
		transform: rotate(90deg);
	}
`;

export const ModelForm = styled.form`
	margin-top: 10px;
	padding: 0 10px;
	> span {
		color: red;
		font-size: 14px;
		font-style: italic;
	}
`;
