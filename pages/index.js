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
			<ExperieceSection experieces={experieces} />

			<FeaturedSection projects={projects} />

			<ProjectSection projects={projects} />
			<SkillSection></SkillSection>



		

			{/* <section className="testimonials">
				<SectionHeading
					title="testimonials"
					subtitle="people i work with?"
				/>
				<div className="testimonials__list">
					{[1, 2, 3, 4].map((project) => (
						<TestimonialItem key={project} />
					))}
				</div>
			</section> */}

			<ContactSection />
		</>
	);
}
