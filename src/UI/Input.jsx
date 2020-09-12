import React from "react";
import styled from "styled-components";

const ModelForm = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	border-bottom: 1px solid black;
	${(props) =>
		props.required &&
		`&:after {
    content: "*";
	}`}
	> span {
		font-size: 1rem;
		font-weight: 500;
	}
	> input {
		font-size: 1rem;
		width: 100%;
		height: 30px;
		border: none;
		outline: none;
		margin: 0 1%;
	}
`;

const Button = styled.button`
	width: 100%;
	font-size: 1rem;
	background-color: #000;
	color: #fff;
	outline: none;
	border: none;
	margin: 8px 0;
	padding: 5px;
	cursor: pointer;
`;

export function Input({ type = "text", label = "input", isRequired = true }) {
	return (
		<ModelForm required={isRequired}>
			<span style={{ width: "25%" }}>{label}</span>
			<span>»</span>
			<input type={type} required={isRequired}></input>
		</ModelForm>
	);
}

export function Submit({ text }) {
	return <Button>{text}</Button>;
}
