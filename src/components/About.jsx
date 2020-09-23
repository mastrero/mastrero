import React, { Fragment, useState } from 'react';
import { Content, TopBar, Logo, Banner, Links, Link } from '../styles/About';
import { aboutContent } from '../utils';
import { Mastrero } from '../images';
import ContactModel from './sub/ContactModel';
import BuyMeACoffee from './sub/BuyMeACoffee';
import MyImage from './sub/MyImage';
import ScrollFeed from './ui/Feed';

export default function About() {
  const [model, showModel] = useState(false);
  const feed = ['dreamer', 'achiever', 'maker', 'coder', 'developer'];
  return (
    <Fragment>
      <Banner>
        <Content>
          <TopBar>
            <Logo src={Mastrero} alt="My Logo" loading="lazy" aria-label="Mastrero" title="Mastrero" />
          </TopBar>
          <h1>Hey there,</h1>
          <h2>
            {aboutContent.name}
            <ScrollFeed data={feed} duration={2500} prefix=" - a"></ScrollFeed>
          </h2>
          <p>{aboutContent.description}</p>
          <Links>
            <Link onClick={() => showModel(!model)}>Get in touch</Link>
            <Link onClick={() => window.open('https://github.com/mastrero', '_blank')}>Github</Link>
            <Link onClick={() => document.querySelector('#Resume').scrollIntoView(true)}>Hire Me</Link>
          </Links>
          <BuyMeACoffee />
        </Content>
        <MyImage />
      </Banner>
      {model && <ContactModel show={model} close={() => showModel(!model)} />}
    </Fragment>
  );
}
