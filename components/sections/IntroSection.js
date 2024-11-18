import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  IntroSectionVariants,
  slideUp,
  fadeIn,
} from "../../src/utils/animationVariants";
import Button from "../Button";
import Head from 'next/head';

export default function IntroSection() {
  const one = (
    <h4 className="intro__subtitle heading__4">
      Hello! <span className="hi">👋</span> I&apos;m Rances Cuizon
    </h4>
  );
  const two = (
    <h1 className="intro__title heading__1">
      I <span>design</span> and <span>develop</span> things for mobile and web.
    </h1>
  );
  const introTexts = [one, two];

  return (
    <>

      <motion.section
        className="intro"
        id="Home"
        variants={IntroSectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image and other elements */}

        <div className="intro__content">
          {introTexts.map((text, i) => (
            <motion.div variants={slideUp} key={i}>
              {text}
            </motion.div>
          ))}

          <motion.div className="intro__actions" variants={slideUp}>
            <Button
              href="#Contact"
              className="btn btn__primary"
              text="Contact me"
            />
            <Button
              href="/Resume.pdf"
              className="btn btn__primary"
              text="View Resume"
              target="_blank"
              rel="noopener noreferrer"
            />

            <div className="social__links">
              <Button
                href="https://github.com/raceczn"
                className="btn btn__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                text={<FiGithub />}
              />
              <Button
                href="https://www.linkedin.com/in/rances-cuizon-ab5144338/"
                className="btn btn__link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                text={<FiLinkedin />}
              />
            </div>
          </motion.div>
        </div>

        <motion.div className="triangle" variants={fadeIn}>
          &nbsp;
        </motion.div>
        <motion.div className="triangle2" variants={fadeIn}>
          &nbsp;
        </motion.div>
      </motion.section>
    </>
  );
}
