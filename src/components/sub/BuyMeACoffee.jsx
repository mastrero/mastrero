import React from 'react';
import styled from 'styled-components';
import CoffeeSvg from '../../images/misc/coffee.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: var(--about-bg);
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const CoffeeButton = styled.button`
  height: 60px;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;
  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    content: '';
    background: var(--pink);
    transition: clip-path 0.35s;
  }
  span:nth-child(1) {
    font-size: 1rem;
    position: absolute;
    left: -50px;
    transition: left 0.35s;
  }
  span:nth-child(2) {
    font-size: 1.12rem;
    padding-right: 5px;
    font-family: 'Kaushan Script', cursive;
  }
  > img {
    width: 32px;
  }
  &:hover {
    &:before {
      clip-path: polygon(0 77%, 100% 77%, 100% 100%, 0 84%);
    }
    span:nth-child(1) {
      left: -30px;
    }
  }
`;

export default function BuyMeACoffee(props) {
  return (
    <Wrapper>
      <CoffeeButton onClick={() => window.open('https://www.buymeacoffee.com/mastrero')}>
        <span>I'm Coffee-holic, </span>
        <span>Buy me a coffee</span>
        <img src={CoffeeSvg} alt="" />
      </CoffeeButton>
    </Wrapper>
  );
}
