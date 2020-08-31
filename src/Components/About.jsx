import React, { Fragment } from "react";
import { Content, Button, Details, DetailsItem } from "../Styles/About";
import { aboutContent, aboutDetails } from "../utils";

export default function About() {
	return (
		<Fragment>
			<Content>
				<h1>Hey there,</h1>
				<h2>{aboutContent.name}</h2>
				<p>{aboutContent.description}</p>
			</Content>
			<Button onClick={() => document.getElementById("Contact").scrollIntoView(true)}>GET IN TOUCH</Button>
			<AboutME />
		</Fragment>
	);
}

function AboutME() {
	return (
		<Details>
			{aboutDetails.map((details, index) => (
				<DetailsItem key={index}>
					<h2>{details.head}</h2>
					<p>{details.para}</p>
				</DetailsItem>
			))}
		</Details>
	);
}
