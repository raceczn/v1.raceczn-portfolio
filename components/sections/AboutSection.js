import { FiGithub, FiLinkedin } from "react-icons/fi"; 
import Image from "next/image";

import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="about" id="About">
      <div className="card about__content">
        <div className="card__actions">
          <Button
            href="https://github.com/raceczn"
            className="btn btn__link"
            target="__blank"
            aria-label="Visit my GitHub"
            text={<FiGithub />}
          />
          <Button
            href="https://www.linkedin.com/in/rances-cuizon-ab5144338/"
            className="btn btn__link"
            target="__blank"
            aria-label="Visit my LinkedIn"
            text={<FiLinkedin />}
          />
        </div>
        <div className="card__content">
          <h4 className="heading__2">Get to know me</h4>
          <h5 className="heading__5">
            What I love to do?
          </h5>

          <p className="card__body">
            {"Rances is a passionate designer and developer who loves creating innovative solutions for both mobile and web platforms. Currently, he is pursuing a Bachelor of Science in Computer Science at Cavite State University, where he is honing his skills and expanding his knowledge in technology."}
            <br />
            <br />
            {"Moreover, throughout his experience, Rances has overcome many challenges, which have strengthened his leadership and problem-solving skills. He takes pride in contributing to successful projects, whether it's creating mobile apps or responsive web interfaces. He enjoys every step of the process—from ideation to execution."}
          </p>
        </div>

        <div className="tags">
          <span className="tag">$coding</span>
          <span className="tag">$learning</span>
          <span className="tag">$design</span>
          <span className="tag">$leadership</span>
        </div>
      </div>

      <div className="about__gallery">
        <div className="about__thumbnail">
          <Image 
            src="/images/aboutme2.jpg" 
            alt="Rances in action, designing and developing" 
            layout="fill" 
            priority
          />
        </div>
        <div className="about__thumbnail">
          <Image 
            src="/images/aboutme4.png" 
            alt="Rances' portrait" 
            width={500} 
            height={700} 
          />
        </div>
        <div className="about__thumbnail">
          <Image 
            src="/images/aboutme3.png" 
            alt="Rances working on a laptop" 
            width={450} 
            height={530} 
          />
        </div>
        <div className="about__thumbnail">
          <Image 
            src="/images/aboutme6.jpg" 
            alt="Rances collaborating with others" 
            layout="fill" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
