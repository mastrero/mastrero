import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
	> label,
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

export function Input({ value, update = () => {}, type = "text", label = "input", isRequired = true, name = label }) {
	return (
		<Wrapper required={isRequired}>
			<label style={{ width: "25%" }}>{label}</label>
			<span>»</span>
			<input value={value} onChange={update} type={type} name={name} aria-label={label} title={label} required={isRequired}></input>
		</Wrapper>
	);
}

export function Submit({ text = "Submit", click = () => {} }) {
	return (
		<Button type='submit' onClick={click}>
			{text}
		</Button>
	);
}
