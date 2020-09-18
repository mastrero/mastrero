import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  padding: 80px 0;
  @media screen and (max-width: 659px) {
    padding: 10px 0 100px 0;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  > img {
    width: 300px;
  }
  @media screen and (max-width: 659px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    > img {
      width: 250px;
    }
  }
`;

const Content = styled.div`
  padding-top: 80px;
  > h2 {
    font-weight: 500;
  }
  > h3 {
    font-weight: 300;
  }
  > button {
    color: #ffffff;
    background-color: #000000b7;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 600;
    width: 135px;
    box-shadow: 3px 2px #000000d2;
  }
  > button:hover {
    cursor: pointer;
    font-weight: 500;
  }

  @media screen and (max-width: 659px) {
    > {
      align-self: flex-start;
      margin-left: 7%;
    }
    > h2 {
      font-size: 1.35rem;
    }
    > h3 {
      font-size: 1.15rem;
    }
  }
`;

const NotFoundPage = () => (
  <Section>
    <SEO title="404: Not found" />
    <Wrapper>
      <img src="https://media.tenor.com/images/62e8f689458bb94ec020b4caab09c842/tenor.gif" alt="404" loading="eager" />
      <Content>
        <h2>OOPS!! You reached edge of the Cliff</h2>
        <h3>The page you are looking for does not exist.</h3>
        <button
          onClick={() => {
            window.location.pathname = process.env.PUBLIC_URL || '/';
          }}>
          Go to Home
        </button>
      </Content>
    </Wrapper>
  </Section>
);

export default NotFoundPage;
