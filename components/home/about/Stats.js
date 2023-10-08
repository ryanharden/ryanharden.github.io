import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MyLinks } from "@/components/nav/components/MyLinks";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      {/* <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jira</span>
            <span className="chip">Heroku</span>
            <span className="chip">AWS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Rust</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Java</span>
            <span className="chip">Spring</span>
            <span className="chip">Figma</span>
            <span className="chip">Whimsical</span>
            <span className="chip">Planetscale</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
          </div>
        </div>
      </Reveal> */}
      <Reveal>
        <img src="/prof.jpeg" className={styles.profPic} alt=""></img>
      </Reveal>
      <Reveal>
        <div className={styles.aboutInfo}>
          <p><span className={styles.titleS}>Name: </span> <span>Ryan Harden</span></p>
          <p><span className={styles.titleS}>Title: </span> <span>Full Stack Software Engineer</span></p>
          <p className={styles.email}><span className={styles.titleS}>Email: </span> <span
            className={styles.email}>ryanharden20@gmail.com</span></p>
          <p><span className={styles.titleS}>Phone: </span> <span>(707) 494-3324</span></p>
        </div>
      </Reveal>
      {/* <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal> */}
    </div>
  );
};
