import React, { Fragment } from "react";
import { Content, Buttons, Button, Image } from "../Styles/About";
import { BottomImage } from "../Assets";

export default function About() {
	return (
		<Fragment>
			<Content>
				<h1>Hey there,</h1>
				<h3>I'm ArunKumar Nadikattu</h3>
				<p>A enthusiastic web developer, focused on the design and development of digital products.</p>
			</Content>
			<Buttons>
				<Button onClick={() => document.getElementById("contact").scrollIntoView(true)}>GET IN TOUCH</Button>
			</Buttons>
			<Image src={BottomImage} alt='Me' />
		</Fragment>
	);
}
