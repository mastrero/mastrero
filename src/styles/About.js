import styled from 'styled-components';

// Styles
export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 0 10px;
  height: 45px;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const Banner = styled.div`
  height: 100%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--about-bg);
  justify-content: space-between;
  align-items: flex-end;
`;

export const Content = styled.div`
  width: 55%;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  > h1 {
    margin: 1.25rem 0;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    font-size: 2.25rem;
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
  justify-content: center;
`;

export const Link = styled.button`
  padding: 1px;
  font-size: 18px;
  margin: 0 10px;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0;
  border: none;
  border-bottom: 2px solid #a5a5a5;
  &:hover {
    border-color: var(--typed-font);
    color: var(--typed-font);
  }
`;
