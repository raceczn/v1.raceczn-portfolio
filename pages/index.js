import React from "react";

import IntroSection from "../components/sections/IntroSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import ProjectSection from "../components/sections/ProjectSection";
import ExperieceSection from "../components/sections/ExperieceSection";
import SkillSection from "../components/sections/SkillSection"

export default function Home({ projects, experieces }) {
	return (
		<>
			<IntroSection />
			<AboutSection />
			<FeaturedSection projects={projects} />
			<ProjectSection projects={projects} />
			<ExperieceSection experieces={experieces} />
			<SkillSection></SkillSection>
			<ContactSection />
		</>
	);
}
