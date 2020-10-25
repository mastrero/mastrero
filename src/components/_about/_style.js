import styled from 'styled-components';

// Styles
export const TopBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 45px;
`;

export const Logo = styled.img`
  width: 140px;
  border-bottom: 1px solid black;
`;

export const Banner = styled.div`
  height: 100%;
  padding-top: 50px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end; */
  background-color: transparent;
`;

export const Content = styled.div`
  width: 88%;
  margin: 0 auto;
  padding: 15px;
  ${props => props.theme.bp.mb('width: 90%;')}
  color: ${props => props.theme.colors.font};
  > h1 {
    margin: 1.25rem 0;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    font-size: 2rem;
  }
  > h2 {
    font-weight: 600;
    line-height: 36px;
    font-size: 24px;
  }
  > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Links = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Link = styled.button`
  padding: 0 1px;
  font-size: 1.15rem;
  margin: 0 15px;
  background-color: transparent;
  box-sizing: border-box;
  color: var(--black);
  cursor: pointer;
  outline: 0;
  border: none;
  border-bottom: 2px solid #a5a5a5;
  &:hover {
    font-size: 1.125rem;
    font-weight: 600;
    transition: border 0.4s ease-in;
    border-color: var(--black);
  }
`;
