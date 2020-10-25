import React from 'react';
import { Wrapper, Flex, Box } from './_style';
import PropTypes from 'prop-types';

import * as Images from '../../images';
import { know, tools, learning } from '../../utils';

export default function Skills() {
  return (
    <>
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
    </>
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

//! PROPTYPES
PouplateItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
