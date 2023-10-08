import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        {/* <SideBar /> */}
        <div className={styles.fixedSidebar}>
          <SideBar />
        </div>
        <main>
          {/* <Heading /> */}
          {/* <Hero /> */}
          <div className={styles.vantaContainer}>
            {/* <SideBar /> */}
            <Hero />
          </div>
          <About />
          <Projects />
          <div id="experience-anchor" className={styles.experienceAnchor}></div>
          <Experience />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
