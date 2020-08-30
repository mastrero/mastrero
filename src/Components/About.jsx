import React, { Fragment } from "react";
import { Content, Buttons, Button, Image } from "../Styles/About";
import { BottomImage } from "../Assets";

export default function About() {
	return (
		<Fragment>
			<Content>
				<h1>Hey there,</h1>
				<h2>I'm ArunKumar Nadikattu</h2>
				<p>A enthusiastic web developer, focused on the design and development of digital products.</p>
			</Content>
			<Buttons>
				<Button onClick={() => document.getElementById("Contact").scrollIntoView(true)}>GET IN TOUCH</Button>
			</Buttons>
			<Image src={BottomImage} alt='Me' />
		</Fragment>
	);
}
