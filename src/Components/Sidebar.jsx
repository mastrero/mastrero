import React, { useState, useEffect, useCallback, useRef } from "react";
import Backdrop from "../UI/Backdrop";
import { Container, NavList, NavListItem, NavMenu, Themer, ThemeIcon } from "../Styles/Sidebar";
import { links } from "../utils";
import * as Images from "../Assets";

export default function ({ mainRef, toggleTheme }) {
	const [menu, showMenu] = useState(false);
	const navRef = useRef(null);

	const handlers = {
		checkScrolling: useCallback(() => {
			let sections = mainRef.current.children;
			let navItems = navRef.current.children;
			let activeSectionId = Object.keys(sections)
				.map((key) => (sections[key].offsetTop <= +mainRef.current.scrollTop + 5 ? sections[key] : null))
				.filter((item) => item)
				.pop().id;
			Object.values(navItems).map(({ rel, classList }) =>
				rel === activeSectionId ? classList.add("active") : classList.remove("active")
			);
		}, [mainRef]),

		scrollToSection: useCallback((href) => {
			document.getElementById(href).scrollIntoView(true);
			setTimeout(() => {
				showMenu(false);
			}, 1500);
		}, []),

		menuHandler: useCallback(() => {
			showMenu(!menu);
		}, [menu]),
	};

	useEffect(() => {
		mainRef.current.addEventListener("scroll", () => {
			handlers.checkScrolling();
		});
		return (mainRef) => {
			// mainRef.current.removeEventListener("scroll", () => {});
			handlers.checkScrolling();
		};
	}, [handlers, mainRef]);

	return (
		<React.Fragment>
			<Container show={menu}>
				<div onClick={handlers.menuHandler} style={{ cursor: "pointer", height: 20 }}>
					<NavMenu show={menu} />
				</div>
				<NavListElement scroll={handlers.scrollToSection} reference={navRef} />
				<Themer onClick={toggleTheme}>
					Theme <ThemeIcon />
				</Themer>
			</Container>
			{menu && <Backdrop onClick={handlers.menuHandler} />}
		</React.Fragment>
	);
}

const NavListElement = ({ reference, scroll }) => (
	<NavList ref={reference}>
		{links.map((link, index) => (
			<NavListItem className={!index && "active"} key={link} rel={link} onClick={() => scroll(link)} icon={Images[link]}>
				{link}
			</NavListItem>
		))}
	</NavList>
);
