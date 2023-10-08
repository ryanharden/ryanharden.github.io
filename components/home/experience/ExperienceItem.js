import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";
import { motion } from "framer-motion";


// const bounceAnimation = {
//   y: ["0%", "-5%", "0%"],
//   transition: { duration: 0.5, yoyo: Infinity }
// };
const bounceAnimation = {
  y: ["0%", "-10%", "0%", "-7%", "0%", "-5%", "0%", "-3%", "0%", "-1%", "0%"],
  transition: {
    duration: 2,  // Adjust this to make the whole animation longer or shorter
    ease: "easeOut"
  }
};

export const ExperienceItem = ({
  title,
  className,
  position,
  time,
  location,
  description,
  tech,
  techLogo,
}) => {
  return (
    <div className={styles.experienceItem}>
      {/* <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.position}>{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.tech}>
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal> */}
      <Reveal>
        <motion.div whileHover={bounceAnimation}>
          <div className="techLogo">
            {techLogo ? (
              <img src={techLogo} className={styles[className]} alt={title} />
            ) : (
              <div className={styles.noLogo}>express</div>
            )}
          </div>
        </motion.div>
      </Reveal>
      <div className={styles.heading}>
        <Reveal>
          <span className={
            techLogo === "tech-logos/postman-logo.png" ? styles.postmanTitle :
              techLogo === "express" ? styles.expressTitle :
                techLogo === "tech-logos/css-logo.png" ? styles.cssTitle :
                  styles.title
          }>
            {title}
          </span>
        </Reveal>
      </div>
    </div>
  );
};
