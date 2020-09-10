import React, { Fragment } from "react";
import { Content, Button } from "../Styles/About";
import { aboutContent } from "../utils";

export default function About() {
	return (
		<Fragment>
			<Content>
				<h1>Hey there,</h1>
				<h2>{aboutContent.name}</h2>
				<p>{aboutContent.description}</p>
			</Content>
			<Button onClick={() => document.getElementById("Contact").scrollIntoView(true)}>GET IN TOUCH</Button>
		</Fragment>
	);
}
