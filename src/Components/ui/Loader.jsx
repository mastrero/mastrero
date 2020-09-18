import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% { 
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled.div`
  background: #ffffff88;
  position: absolute;
  width: 100%;
  height: 100%;
  > div {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 40%;
    top: 40%;
    &:before,
    &:after {
      content: '';
      background-color: #333;
      width: 15px;
      height: 15px;
      position: absolute;
      border-radius: 50%;
      animation: ${animate} 1.8s infinite ease-in-out;
    }
    &:after {
      animation-delay: -0.9s;
    }
  }
`;

const Loader = () => (
  <Wrapper>
    <div />
  </Wrapper>
);

export default Loader;
