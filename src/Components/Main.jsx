import React from "react";
import { MainSection, Image, Content } from "../Styles/About";
import { BottomImage } from "../Assets";

export const About = () => {
	return (
		<MainSection id='about'>
			<Content>
				<h1>Hey there,</h1>
				<h3>I'm ArunKumar Nadikattu</h3>
				<p>A enthusiastic web developer, focused on the design and development of digital products.</p>
			</Content>
			<Image src={BottomImage} alt='Me' />
		</MainSection>
	);
};

export const Resume = () => {};
