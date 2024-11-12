import { motion } from "framer-motion";
import { slideUp } from "../src/utils/animationVariants";

const ExperienceItem = ({ experience }) => {
  const { title, position, body, image } = experience.fields; // Destructure the image field here
  return (
    <motion.div className="experience__item" variants={slideUp}>
      <div className="experience__image-wrapper">
        <img src={image} alt={title} className="experience__image" /> {/* Display the image */}
      </div>
      <div className="experience__details">
        <div className="experience__title-body">
          <h3 className="heading__5">{title}</h3>
          <label className="experience__body">{body}</label>
        </div>
        <label className="experience__subtitle">{position}</label>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
