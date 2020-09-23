import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Backdrop from './ui/Backdrop';
import { Container, NavList, NavListItem, NavMenu } from '../styles/Sidebar';
import { links } from '../utils';
import * as Images from '../images';

export default function Sidebar({ mainRef }) {
  const [menu, showMenu] = useState(false);
  const navRef = useRef(null);

  const handlers = {
    checkScrolling: useCallback(() => {
      let sections = mainRef.current.children;
      let navItems = navRef.current.children;
      let activeSectionId = Object.keys(sections)
        .map(key => (sections[key].offsetTop <= +mainRef.current.scrollTop + 5 ? sections[key] : null))
        .filter(item => item)
        .pop().id;
      Object.values(navItems).map(({ rel, classList }) =>
        rel === activeSectionId ? classList.add('active') : classList.remove('active')
      );
    }, [mainRef]),

    scrollToSection: useCallback(href => {
      document.getElementById(href).scrollIntoView(true);
      showMenu(false);
    }, []),

    menuHandler: useCallback(() => {
      showMenu(!menu);
    }, [menu]),
  };

  useEffect(() => {
    mainRef.current.addEventListener('scroll', () => {
      handlers.checkScrolling();
    });
    return () => {
      handlers.checkScrolling();
    };
  }, [handlers, mainRef]);

  return (
    <React.Fragment>
      <Container show={menu}>
        <div style={{ height: 30 }}>
          <NavMenu onClick={handlers.menuHandler} show={menu} />
        </div>
        <NavListElement scroll={handlers.scrollToSection} reference={navRef} />
      </Container>
      {menu && <Backdrop onClick={handlers.menuHandler} />}
    </React.Fragment>
  );
}

const NavListElement = ({ reference, scroll }) => (
  <NavList ref={reference} links={links}>
    {links.map((link, index) => (
      <NavListItem className={!index && 'active'} key={link} rel={link} onClick={() => scroll(link)}>
        <span>{link}</span>
        <img src={Images[link]} alt={link} title={link} loading="lazy" />
      </NavListItem>
    ))}
  </NavList>
);

//! PROPTYPES
NavListElement.propTypes = {
  reference: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  scroll: PropTypes.func,
};

Sidebar.propTypes = {
  mainRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};
