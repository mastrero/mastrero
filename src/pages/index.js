import React, { Fragment, useRef } from 'react';
import Components from '../components/index';
import ScrollToTop from '../components/ui/Scrolltotop';
import { links } from '../utils';
import SEO from '../components/sub/SEO';
import { GlobalStyle, Main, Section } from '../styles/Global';

const Sections = () => {
  return links.map(link => {
    let Component = Components[link];
    return (
      <Section id={link} key={link}>
        <Component />
      </Section>
    );
  });
};

export default function Home() {
  const mainRef = useRef(null);

  return (
    <Fragment>
      <GlobalStyle />
      <SEO title="Portfolio" />
      <Components.Sidebar mainRef={mainRef} />
      <ScrollToTop mainRef={mainRef} />
      <Main ref={mainRef}>
        <Sections />
      </Main>
    </Fragment>
  );
}
