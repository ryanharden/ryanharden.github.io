import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from 'react';

export const About = () => {
  const titleRef = useRef(null);
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader ref={titleRef} title="About" dir="l" />
      <div className={styles.about}>
        <Stats />
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! As a software engineer, I'm passionate about crafting functional applications and addressing real-world challenges through digital solutions. My transition from kinesiology to software engineering has given me a distinctive perspective, enriching my skills and experiences. This unique background enhances each project I undertake.
            </p>
          </Reveal>
          <Reveal>
            <h4>
              Currently...
            </h4>
            <p className={styles.aboutText}>
              I'm working for a non-profit organization, OKB Hope Foundation, where I'm designing/building an interactive map interface that highlights communities the non-profit serves.
              Additionally, I'm expanding the functionality of my primary projects while also initiating new ones. I aspire to work
              for a company that values employee development, offers growth opportunities, and fosters a
              collaborative work environment.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I'm not working you can find me surrounded by music and good company. I'm an avid sports fan and nature enthusiast, who loves chasing sunsets!
            </p>
          </Reveal>
          {/* <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my
              love for code with my love for the canvas. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal> */}
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
