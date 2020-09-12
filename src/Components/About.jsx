import React, { Fragment, useState } from "react";
import { Content, TopBar, Logo, Image, Banner, Links, Link } from "../Styles/About";
import { ModelWrapper, Model, ModelHeading, CloseModel, ModelForm } from "../Styles/About";
import { aboutContent } from "../utils";
import { Mastrero, Me } from "../Assets";
import { Input, Submit } from "../UI/Input";

export default function About() {
	const [model, showModel] = useState(false);

	return (
		<Fragment>
			<TopBar>
				<Logo src={Mastrero} alt='My Logo' loading='lazy' aria-label='Mastrero' title='Mastrero' />
			</TopBar>
			<Banner>
				<Content>
					<h1>Hey there,</h1>
					<h2>
						{aboutContent.name} <span id='text' />
					</h2>
					<p>{aboutContent.description}</p>
					<Links>
						<Link onClick={() => showModel(!model)}>Get in touch</Link>
						<Link onClick={() => window.open("https://github.com/mastrero", "_blank")}>Github</Link>
						<Link onClick={() => document.querySelector("#Resume").scrollIntoView(true)}>Hire Me</Link>
					</Links>
				</Content>
				<Image src={Me} alt='My Self' />
			</Banner>
			<ContactModal show={model} close={() => showModel(!model)} />
		</Fragment>
	);
}

const ContactModal = ({ show, close }) => {
	return (
		<ModelWrapper className={show ? "show" : ""}>
			<Model className={show ? "show" : ""}>
				<p>Reach me out ...</p>
				<ModelHeading onClick={close}>
					<CloseModel />
				</ModelHeading>
				<ModelForm>
					<Input type='text' label='Name' />
					<Input type='email' label='Email ID' />
					<Input type='text' label='Purpose' />
					<Submit text='Submit' />
					<span>* - required</span>
				</ModelForm>
			</Model>
		</ModelWrapper>
	);
};
