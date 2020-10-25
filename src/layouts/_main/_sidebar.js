import React, { useState, useEffect, useCallback, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../components/sub/_backdrop';
import { Container, NavList, NavListItem, NavMenu, Main } from './_style';
import { links } from '../../utils';
import * as Images from '../../images';

const Sidebar = ({ mainRef }) => {
  const [menu, showMenu] = useState(false);
  const navRef = useRef(null);

  const checkScrolling = useCallback(() => {
    let sections = mainRef.current.children;
    let navItems = navRef.current.children;
    let activeSectionId = Object.keys(sections)
      .map(key => (sections[key].offsetTop <= +mainRef.current.scrollTop + 5 ? sections[key] : null))
      .filter(item => item)
      .pop().id;
    Object.values(navItems).map(({ rel, classList }) =>
      rel === activeSectionId ? classList.add('active') : classList.remove('active')
    );
  }, [mainRef]);

  const scrollToSection = useCallback(href => {
    document.getElementById(href).scrollIntoView(true);
    showMenu(false);
  }, []);

  const menuHandler = useCallback(() => {
    showMenu(!menu);
  }, [menu]);

  useEffect(() => {
    mainRef.current.addEventListener('scroll', () => checkScrolling());
    return () => checkScrolling();
  }, [checkScrolling, mainRef]);

  return (
    <React.Fragment>
      <Container show={menu}>
        <div style={{ height: 30 }}>
          <NavMenu onClick={menuHandler} show={menu} />
        </div>
        <NavListElement scroll={scrollToSection} reference={navRef} />
      </Container>
      {menu && <Backdrop onClick={menuHandler} />}
    </React.Fragment>
  );
};

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

export default Sidebar;
