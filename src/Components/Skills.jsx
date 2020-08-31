import React, { Fragment } from "react";
import { Wrapper, Flex, Box } from "../Styles/Skills";
import * as Images from "../Assets";
import { know, tools, learning } from "../utils";

const searchLink = "https://duckduckgo.com/?q=";

export default function Skills() {
	return (
		<Fragment>
			<Wrapper>
				<h1>What I know</h1>
				<PouplateItems items={know} />
			</Wrapper>
			<Wrapper>
				<h1>I'm currently learning</h1>
				<PouplateItems items={learning} />
			</Wrapper>
			<Wrapper>
				<h1>Tools I use</h1>
				<PouplateItems items={tools} />
			</Wrapper>
		</Fragment>
	);
}

const PouplateItems = ({ items, width }) => (
	<Flex>
		{items.map((item, index) => (
			<Box key={item + index} onClick={() => window.open(`${searchLink}${item}`, "_blank")}>
				<p>{item}</p>
				<img src={Images[item.replace(/ /g, "")]} alt={item} />
			</Box>
		))}
		{Array(6)
			.fill()
			.map((index) => (
				<Box key={index} />
			))}
	</Flex>
);
