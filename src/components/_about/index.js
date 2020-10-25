import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Content, TopBar, Logo, Banner, Links, Link } from './_style';
import { Mastrero } from '../../images';
import BuyMeACoffee from '../sub/_buyMeACoffee';
import ScrollFeed from '../sub/_feed';
// import ContactModel from './sub/ContactModel';
// import MyImage from './sub/MyImage';

export default function About() {
  const content = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { slug: { eq: "about" } }) {
          edges {
            node {
              frontmatter {
                name
                description
              }
            }
          }
        }
      }
    `
  );
  console.log(content.allMdx.edges[0].node.frontmatter);
  const feed = ['dreamer', 'achiever', 'maker', 'coder', 'developer'];
  return (
    <Banner>
      <Content>
        <TopBar>
          <Logo src={Mastrero} alt="My Logo" loading="lazy" aria-label="Mastrero" title="Mastrero" />
        </TopBar>
        <h1>Hey there,</h1>
        <h2>
          {content.allMdx.edges[0].node.frontmatter.name}
          <ScrollFeed data={feed} duration={2500} prefix=" - a"></ScrollFeed>
        </h2>
        <p>{content.allMdx.edges[0].node.frontmatter.description}</p>
        <Links>
          <Link onClick={() => document.getElementById(`Contact`).scrollIntoView(true)}>Get in touch</Link>
          <Link onClick={() => window.open('https://github.com/mastrero', '_blank')}>Github</Link>
          <Link onClick={() => window.open('https://www.linkedin.com/in/arun-kumar-n/', '_blank')}>LinkedIn</Link>
          <Link onClick={() => document.querySelector('#Resume').scrollIntoView(true)}>Hire Me</Link>
        </Links>
        <BuyMeACoffee />
      </Content>
    </Banner>
  );
}
// {model && <ContactModel show={model} close={() => showModel(!model)} />}
// {/* <MyImage /> */}
