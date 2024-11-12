import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import ProjectItem from "../ProjectItem";
import React, { useMemo } from 'react';

export default function ProjectSection() {
  const [ref, controls] = useAnimateWhenViewed(-250);

  // Memoize projects to avoid unnecessary re-renders
  const projects = useMemo(() => [
    {
      sys: { id: 1 },
      fields: {
        title: "Comfee",
        subtitle: "E-commerce Coffee Shop",
        body: "A static application for managing Comfee, featuring a list of items, a gallery to showcase products, a contact section, and an about page. The app allows customers to easily browse the coffee menu, view product images, and shop's information.",
        tools: ["Java", "Swing"],
        github: "https://github.com/raceczn/comfee_app",
      },
    },
    {
      sys: { id: 2 },
      fields: {
        title: "Staycation",
        subtitle: "Booking Application",
        body: "Developed using Java Swing for the user interface and MySQL for the backend database. It allows users to easily browse and book accommodations, offering a seamless and intuitive booking experience.",
        tools: ["Java", "Swing", "MySQL"],
        github: "https://github.com/raceczn/staycation",
      },
    },
    {
      sys: { id: 3 },
      fields: {
        title: "Checklist",
        subtitle: "Personal Academic Checklist",
        body: "Web application for academic records stored in a MySQL database. It displays personal information, courses, grades, instructors, and units, allowing students to easily view and track their academic progress.",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        github: "https://github.com/raceczn/Checklist",
      },
    },
  ], []); // Empty dependency array ensures that the projects are not recreated

  return (
    <motion.section
      className="project"
      id="Projects"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <SectionHeading
        title="Noteworthy Projects"
        subtitle="Other Projects I've Built"
      />
      
      <div className="card__list">
        {projects.map((project) => (
          <motion.article key={project.sys.id} variants={sectionVariants} initial="hidden" animate="visible">
            <ProjectItem project={project} />
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
