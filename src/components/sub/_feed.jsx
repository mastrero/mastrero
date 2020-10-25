import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';

const defaultAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }
  33% {
    opacity: 0.5;
  }
  65% {
    transform: translateY(0px);
    opacity: 1;
  }
  70% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const prefixAnimation = keyframes`
  from {
    transition: scale(0.5);
    opacity: 0;
  }
  to {
    transition: scale(1);
    opacity: 1;
  }
`;

const selectAnimation = css`
  animation: ${props => props.effect} ${props => props.duration}ms cubic-bezier(0.18, 0.89, 0.32, 1.28) infinite;
`;

const Wrapper = styled.span`
  position: relative;
  margin: 0px;
  span {
    color: ${props => props.theme.colors.font};
  }
  > span.prefix {
    animation: ${prefixAnimation} 1500ms ease-in 1;
  }
  > span.scroll {
    padding: 0 8px;
    position: absolute;
    ${selectAnimation}
  }
  ${props => {
    const { fontColor, backgroundColor, fontSize } = props;
    return `
    color: ${fontColor};
    background-color: ${backgroundColor};
    font-size: ${fontSize};
  }`;
  }}
`;

export default function ScrollFeed({ prefix, data, duration, effect, fontColor, backgroundColor, fontSize, children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (index >= data.length - 1) return setIndex(0);
      setIndex(prevValue => prevValue + 1);
    }, duration);
    return () => clearInterval(interval);
  }, [setIndex, index, data.length, duration]);

  return (
    <Wrapper {...{ duration, effect, fontColor, backgroundColor, fontSize }}>
      {children}
      <span className="prefix">{prefix}</span>
      <span className="scroll">{data[index].replace(/ /g, '\u00a0')}</span>
    </Wrapper>
  );
}

ScrollFeed.defaultProps = {
  data: [],
  prefix: '',
  duration: 2500,
  effect: defaultAnimation,
  fontColor: '#000000',
  backgroundColor: 'transparent',
  fontSize: '24px',
};

ScrollFeed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  prefix: PropTypes.string,
  duration: PropTypes.number,
  effect: PropTypes.any,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.element,
};
