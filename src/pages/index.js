import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../layouts/Global';
import { links } from '../utils';
import SEO from '../utils/SEO';
import Components from '../components/index';
import MainLayout from '../layouts/_main';

const Section = styled.section`
  height: 100%;
  min-height: 100%;
  background-color: transparent;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-left: 35px;
  }
`;

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title="Portfolio" />
      <MainLayout>
        <Sections />
      </MainLayout>
    </ThemeProvider>
  );
}
