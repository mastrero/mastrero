import React, { useState, useEffect, useCallback, useRef } from "react";
import Backdrop from "../UI/Backdrop";
import { Container, NavList, NavListItem, NavMenu, Themer, ThemeIcon } from "../Styles/Sidebar";
import { links } from "../utils";

export default function ({ mainRef, toggleTheme }) {
	const [menu, showMenu] = useState(false);
	const navRef = useRef(null);

	const handlers = {
		checkScrolling: useCallback(() => {
			let sections = mainRef.current.children;
			let navItems = navRef.current.children;
			let current_position = +mainRef.current.scrollTop + 5; // +5 for last section visibility
			let activeSectionId = Object.keys(sections)
				.map((key) => (sections[key].offsetTop <= current_position ? sections[key] : null))
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
				<NavMenu show={menu} onClick={() => showMenu(!menu)} />
				<NavList ref={navRef}>
					{links.map(({ href, icon, name }, index) => (
						<NavListItem
							className={!index && "active"}
							key={index}
							rel={href}
							onClick={() => handlers.scrollToSection(href)}
							icon={icon}>
							{name}
						</NavListItem>
					))}
				</NavList>
				<Themer onClick={toggleTheme}>
					Theme <ThemeIcon />
				</Themer>
			</Container>
			{menu && <Backdrop onClick={() => showMenu(!menu)} />}
		</React.Fragment>
	);
}
