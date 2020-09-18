import React, { Fragment } from 'react';
import { Wrapper, Flex, Box } from '../styles/Skills';
import * as Images from '../images';
import { know, tools, learning } from '../utils';

export default function Skills() {
  return (
    <Fragment>
      <Wrapper>
        <h1>What I know</h1>
        <PouplateItems items={know} />
      </Wrapper>
      <Wrapper>
        <h1>I'm currently learning</h1>
        <PouplateItems items={learning} />
      </Wrapper>
      <Wrapper>
        <h1>Tools I use</h1>
        <PouplateItems items={tools} />
      </Wrapper>
    </Fragment>
  );
}

const PouplateItems = ({ items }) => (
  <Flex>
    {items.map((item, index) => (
      <Box key={item + index}>
        <span>{item}</span>
        <img src={Images[item.replace(/ /g, '')]} alt="" title={item} loading="lazy" />
      </Box>
    ))}
  </Flex>
);
