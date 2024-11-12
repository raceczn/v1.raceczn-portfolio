import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import React, { useMemo } from 'react';

export default function SkillSection() {
  const [ref, controls] = useAnimateWhenViewed(-250);

  // Memoize technologies and tools to avoid unnecessary re-renders
  const technologies = useMemo(() => [
    { name: 'HTML', icon: '/images/skills/html5.svg' },
    { name: 'CSS', icon: '/images/skills/css3.svg' },
    { name: 'Bootstrap', icon: '/images/skills/bootstrap5.svg' },
    { name: 'Tailwind', icon: '/images/skills/tailwindcss.svg' },
    { name: 'JavaScript', icon: '/images/skills/js.svg' },
    { name: 'TypeScript', icon: '/images/skills/typescript.svg' },
    { name: 'Next.js', icon: '/images/skills/nextjs.svg' },
    { name: 'React', icon: '/images/skills/reactjs.svg' },
    { name: 'PHP', icon: '/images/skills/php.svg' },
    { name: 'Node.js', icon: '/images/skills/nodejs.svg' },
    { name: 'MySQL', icon: '/images/skills/mysql.svg' },
    { name: 'MongoDB', icon: '/images/skills/mongodb.svg' },
    { name: 'Python', icon: '/images/skills/python.svg' },
    { name: 'Java', icon: '/images/skills/java.svg' },
    { name: 'Flutter', icon: '/images/skills/flutter.svg' },
    { name: 'Dart', icon: '/images/skills/dart.svg' },
  ], []);

  const tools = useMemo(() => [
    { name: 'Framer', icon: '/images/skills/framer.svg' },
    { name: 'Figma', icon: '/images/skills/figma.svg' },
    { name: 'Vercel', icon: '/images/skills/vercel.png' },
    { name: 'Git', icon: '/images/skills/git.svg' },
    { name: 'GitHub', icon: '/images/skills/github.svg' },
    { name: 'VSCode', icon: '/images/skills/vscode.svg' },
    { name: 'Notion', icon: '/images/skills/notion.png' },
    { name: 'Eclipse', icon: '/images/skills/eclipse.png' },
    { name: 'Canva', icon: '/images/skills/canva.svg' },
    { name: 'Miro', icon: '/images/skills/miro.png' },
    { name: 'MS Teams', icon: '/images/skills/msteams.png' },
  ], []);

  return (
    <motion.section
      className="skills"
      id="Skills"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <SectionHeading
        title="A collection of my skills"
        subtitle="Tools I use to build efficient software."
      />

      <div className="skills__container">
        {technologies.map((tech, index) => (
          <motion.article
            key={tech.name}
            className="skills__card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img 
              src={tech.icon} 
              alt={`Icon representing ${tech.name} technology`} 
              className="skills__icon" 
              loading="lazy"  // Lazy loading the images
            />
            <span>{tech.name}</span>
          </motion.article>
        ))}
      </div>
        <br />
      <SectionHeading
        subtitle="Collaboration and developer tools I work with"
      />

      <div className="skills__container">
        {tools.map((tool, index) => (
          <motion.article
            key={tool.name}
            className="skills__card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img 
              src={tool.icon} 
              alt={`Icon representing ${tool.name} tool`} 
              className="skills__icon" 
              loading="lazy"  // Lazy loading the images
            />
            <span>{tool.name}</span>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
