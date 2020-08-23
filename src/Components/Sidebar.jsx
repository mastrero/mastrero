import React, { useState, useEffect, useCallback } from "react";
import Backdrop from "../UI/Backdrop";
import { Container, NavList, NavListItem, Themer, ThemeIcon, NavMenu } from "../Styles/Sidebar";
import * as Images from "../Assets";

export default function (props) {
	const [menu, showMenu] = useState(false);
	const links = [
		{
			name: "About",
			href: "about",
			icon: Images.About,
		},
		{
			name: "Work",
			href: "work",
			icon: Images.Work,
		},
		{
			name: "Contact",
			href: "contact",
			icon: Images.Contact,
		},
		{
			name: "Resume",
			href: "resume",
			icon: Images.Resume,
		},
	];

	const handlers = {
		checkScrolling: useCallback((main) => {
			let sections = main.children;
			let navItems = document.getElementById("navigation").children;
			let current_position = +main.scrollTop + 5; // +5 for last section visibility
			let activeSection = Object.keys(sections)
				.map((key) => (sections[key].offsetTop <= current_position ? sections[key] : null))
				.filter((item) => item);
			activeSection = activeSection[activeSection.length - 1];
			Object.values(navItems).map((navItem) =>
				navItem.rel === activeSection.id ? navItem.classList.add("active") : navItem.classList.remove("active")
			);
		}, []),
		scrollToSection: useCallback((href) => {
			document.getElementById(href).scrollIntoView(true);
			showMenu(false);
		}, []),
	};

	useEffect(() => {
		let main = document.getElementsByTagName("main")[0];
		main.onload = handlers.checkScrolling(main);
		main.addEventListener("scroll", () => {
			handlers.checkScrolling(main);
		});
		return () => {
			main.removeEventListener();
			handlers.checkScrolling(main);
		};
	}, [handlers]);

	return (
		<React.Fragment>
			<Container show={menu}>
				<NavMenu show={menu} onClick={() => showMenu(!menu)} />
				<NavList id='navigation'>
					{links.map(({ href, icon, name }, index) => (
						<NavListItem key={index} rel={href} onClick={() => handlers.scrollToSection(href)} icon={icon}>
							{name}
						</NavListItem>
					))}
				</NavList>
				<Themer onClick={props.toggleTheme}>
					Theme <ThemeIcon />
				</Themer>
			</Container>
			{menu && <Backdrop onClick={() => showMenu(!menu)} />}
		</React.Fragment>
	);
}
