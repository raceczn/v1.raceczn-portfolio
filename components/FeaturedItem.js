import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp } from "../src/utils/animationVariants";
import Button from "./Button";
import { FiGithub } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi"; 

const FeaturedItem = ({ featuredProject }) => {
  const { title, subtitle, body, tools, github, website, image } = featuredProject.fields;

  // Function to check if the URL is a GitHub link
  const isGithubUrl = (url) => {
    return url.toLowerCase().includes('github');
  };

  return (
    <motion.article className="featured__item" variants={slideUp}>
      <div className="featured__img-container">
        {image && (
          <Image
            src={image.fields.file.src}  // Use the path from the project data
            alt={title}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
            className="slanted-image"  // Added the class for slant effect
          />
        )}
      </div>
      <div className="featured__content">
        <h2 className="heading__2">{title}</h2>
        <h5 className="heading__5">{subtitle}</h5>
        <p>{body}</p>

        <div className="tags">
          {tools.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="featured__actions">
          {website ? (
            <Button
              href={website}
              target="_blank"
              className="btn btn__primary"
              text="Take a look"
            />
          ) : (
            <span className="btn btn__primary not-deployed">Not deployed</span>  
          )}
          <Button
            href={github}  
            className="btn btn__link"
            target="_blank"
            text={isGithubUrl(github) ? <FiGithub /> : <FiGlobe />}  
          />
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedItem;
