import React, { Fragment } from "react";
import { skills } from "../utils";
import { SkillsWrapper, SkillsFlex, SkillBox } from "../Styles/Skills";
import * as Images from "../Assets";

export default function Skills() {
	return (
		<Fragment>
			<SkillsWrapper>
				<h1>Skills</h1>
				<SkillsFlex>
					{skills.map((skill, index) => (
						<SkillBox key={skill + index}>
							<img src={Images[skill]} alt={skill} width='40px' height='40px' />
							<p>{skill}</p>
						</SkillBox>
					))}
					<SkillBox style={{ border: "none", margin: "0 10px" }} />
					<SkillBox style={{ border: "none", margin: "0 10px" }} />
					<SkillBox style={{ border: "none", margin: "0 10px" }} />
				</SkillsFlex>
			</SkillsWrapper>

			<div>
				<h1>Interests</h1>
			</div>
		</Fragment>
	);
}
