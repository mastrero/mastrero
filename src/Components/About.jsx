import React, { Fragment, useState } from 'react';
import { Content, TopBar, Logo, Banner, Links, Link } from '../styles/About';
import { aboutContent } from '../utils';
import { Mastrero } from '../images';
import ContactModel from './sub/ContactModel';
import MyImage from './sub/MyImage';

export default function About() {
  const [model, showModel] = useState(false);
  return (
    <Fragment>
      <TopBar>
        <Logo src={Mastrero} alt="My Logo" loading="lazy" aria-label="Mastrero" title="Mastrero" />
      </TopBar>
      <Banner>
        <Content>
          <h1>Hey there,</h1>
          <h2>
            {aboutContent.name} <span id="text" />
          </h2>
          <p>{aboutContent.description}</p>
          <Links>
            <Link onClick={() => showModel(!model)}>Get in touch</Link>
            <Link onClick={() => window.open('https://github.com/mastrero', '_blank')}>Github</Link>
            <Link onClick={() => document.querySelector('#Resume').scrollIntoView(true)}>Hire Me</Link>
          </Links>
        </Content>
        <MyImage />
      </Banner>
      {model && <ContactModel show={model} close={() => showModel(!model)} />}
    </Fragment>
  );
}
