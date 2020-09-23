import styled from 'styled-components';

// STYLES
export const Wrapper = styled.div`
  padding-left: 50px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
  > h1 {
    font-weight: 500;
    color: var(--black);
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: var(--white);
  color: var(--black);
  cursor: pointer;
  align-items: center;
  display: flex;
  transition: all 0.15s linear;
  box-shadow: 2px 2px 5px 0 rgb(204 204 204);
  position: relative;
  border-top-left-radius: 22px;
  &:hover {
    transition: border-top-left-radius 0.2s ease-in;
    border-top-left-radius: 0;
    background-color: var(--black);
    color: var(--white);
    box-shadow: 2px 2px 5px 0 rgb(41 41 41);
  }
  > span {
    padding: 0 5px;
  }
  > img {
    width: 25px;
    height: 25px;
  }
`;
