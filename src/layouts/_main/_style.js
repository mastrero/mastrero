import styled, { keyframes, css } from 'styled-components';

const anim_navItems = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Main = styled.main`
  width: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  transition: all 0.3s linear 0s;
`;

export const Container = styled.aside`
  min-width: 230px;
  height: 100%;
  color: ${props => props.theme.colors.font};
  background-color: ${props => (props.show ? props.theme.colors.bg : `transparent`)};
  box-shadow: -1px 0px 20px 0px rgb(160 160 160 / 62%);
  transition: all 0.3s linear;
  z-index: 30;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  ${props =>
    props.theme.bp.mb(
      `transform: ${props.show ? `translateX(0%)` : `translateX(-85%)`};
      transition: all 0.3s linear;
      box-shadow: 0px 0px 7px 0px rgb(208 208 208 / 86%);
      position: fixed;`
    )}
`;

export const NavList = styled.nav`
  padding: 0px;
  display: flex;
  flex-direction: column;
  ${props =>
    props.links.map(
      (_, i) => css`
        > a:nth-child(${i + 1}) {
          animation-name: ${anim_navItems};
          animation-duration: 0.55s;
          animation-timing-function: ease-in-out;
          animation-delay: ${100 * i + 1}ms;
          animation-fill-mode: both;
        }
      `
    )}
`;

export const NavListItem = styled.a`
  background-color: transparent;
  color: ${props => props.theme.colors.font};
  margin-top: 10px;
  padding: 5px 5px 5px 35px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &.active {
    background: ${props => props.theme.colors.font};
    color: ${props => props.theme.colors.bg};
    border-radius: 0;
  }
  > span {
    font-size: 1.05rem;
  }
  > img {
    width: 25px;
    height: 25px;
  }
`;

export const NavMenu = styled.a`
  &,
  &:after,
  &:before {
    width: 25px;
    height: 3px;
    background-color: ${props => props.theme.colors.font};
    transition: all 0.3s linear;
    z-index: 35;
    cursor: pointer;
  }
  &:after,
  &:before {
    content: '';
    position: absolute;
  }
  & {
    position: absolute;
    top: 15px;
    right: 5px;
  }
  &:after {
    top: 8px;
  }
  &:before {
    top: -8px;
  }
  ${props =>
    props.show &&
    `& {
			transform: rotate(-45deg);
			transform-origin: 57%;
		}
		&:after {
			opacity: 0;
			background: none;
		}
		&:before {
			transform: rotate(90deg);
			transform-origin: 32% 5px;
		}`}
  ${props => props.theme.bp.lg(`display: none;`)}
`;
