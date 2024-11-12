import { useEffect, useState } from "react";
import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import dynamic from "next/dynamic";
import Image from "next/image";
import Head from "next/head";

// Lazy loading the ExperienceItem component
const ExperienceItem = dynamic(() => import("../ExperienceItem"), {
  loading: () => <p>Loading...</p>,
});

export default function ExperienceSection() {
  const [ref, controls] = useAnimateWhenViewed(-250);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = document.body.classList.contains("dark");
      setIsDarkMode(currentTheme);
    };

    handleThemeChange();

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => themeObserver.disconnect();
  }, []);

  // Mock data for experiences
  const professionalExperiences = [
    {
      sys: { id: "1" },
      fields: {
        title: "Cavite State University",
        position: "BS - Computer Science Student",
        body: "Present",
        image: "/images/CvSU.png", // Use absolute path for better loading
      },
    },
    {
      sys: { id: "2" },
      fields: {
        title: "Student Assistant",
        position: "Freelance on Social Media",
        body: "2020 - 2022",
        image: "/images/student.png",
      },
    },
  ];

  const volunteeringExperiences = [
    {
      sys: { id: "3" },
      fields: {
        title: "Github Education",
        body: "2024",
        position: "Student",
        image: isDarkMode ? "/images/lightgithub.png" : "/images/skills/github.svg",
      },
    },
    {
      sys: { id: "4" },
      fields: {
        title: "Microsoft Learn",
        position: "Student",
        body: "2024",
        image: "/images/skills/microsoft.svg",
      },
    },
  ];

  return (


      <motion.section
        className="experience"
        id="experiences"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
        transition={{ duration: 0.2 }} 
      >
        <SectionHeading
          className="selected_featured"
          title="Experiences"
          subtitle="_what i have done?"
        />
        <div className="experience__content">
          <div className="experience__lists">
            {professionalExperiences.map((experience) => (
              <ExperienceItem key={experience.sys.id} experience={experience} />
            ))}
          </div>

          {/* Divider Line */}
          <div className="experience__divider" />

          {/* Right column for volunteering & community experiences */}
          <div className="experience__lists">
            {volunteeringExperiences.map((experience) => (
              <ExperienceItem key={experience.sys.id} experience={experience} />
            ))}
          </div>
        </div>
      </motion.section>

  );
}
