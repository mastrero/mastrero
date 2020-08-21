import React, { useState } from "react";
import Backdrop from "../UI/Backdrop";
import { Container, NavList, NavListItem, Themer, ThemeIcon, NavMenu } from "../Styles/Sidebar";
import * as Images from "../Assets";

export default function (props) {
	const [menu, showMenu] = useState(false);
	const links = [
		{
			name: "About",
			href: "#about",
			icon: Images.About,
		},
		{
			name: "Work",
			href: "#work",
			icon: Images.Work,
		},
		{
			name: "Contact",
			href: "#contact",
			icon: Images.Contact,
		},
		{
			name: "Resume",
			href: "#resume",
			icon: Images.Resume,
		},
	];

	return (
		<React.Fragment>
			<Container show={menu}>
				<div style={{ width: 30, height: 30, cursor: "pointer", marginLeft: "10px" }}>
					<NavMenu show={menu} onClick={() => showMenu(!menu)} />
				</div>
				<NavList>
					{links.map((link, index) => (
						<NavListItem key={index} href={link.href} icon={link.icon}>
							{link.name}
						</NavListItem>
					))}
					<Themer onClick={props.toggleTheme}>
						Theme <ThemeIcon />
					</Themer>
				</NavList>
			</Container>
			{menu && <Backdrop onClick={() => showMenu(!menu)} />}
		</React.Fragment>
	);
}
