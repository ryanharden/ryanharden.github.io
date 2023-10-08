import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { Heading } from '@/components/nav/Heading';
import { SideBar } from '@/components/nav/SideBar';
import { OutlineButton } from "../../buttons/OutlineButton";
import { MyLinks } from "../../nav/components/MyLinks";
// import * as THREE from 'three';

export const Hero = () => {
  const typedRef = useRef(null);
  const heroRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Software Engineer',
        'Software Developer',
        'Software Enthusiast',
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true
    };

    // Initialize the Typed instance on the referenced element.
    const typed = new Typed(typedRef.current, options);

    if (window.VANTA) {
      vantaRef.current = window.VANTA.NET({  // Store the instance in the ref
        el: heroRef.current.parentElement,
        mouseControls: true,
        // THREE: THREE,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x38ACE6,
        backgroundColor: 0x111111,
        points: 13.00,
        maxDistance: 22.00,
        spacing: 16.00,
      });
    }

    // Cleanup function to destroy the Typed instance when the component unmounts.
    return () => {
      typed.destroy();
      if (vantaRef.current) {
        vantaRef.current.destroy();  // Call destroy on the instance
      }
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className={`heroWrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Ryan Harden<span></span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            <span ref={typedRef}></span>
          </h2>
        </Reveal>
        {/* <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;ve spent the last 5 years building and scaling software for
            some pretty cool companies. I also teach people to paint online
            (incase you&apos;ve got an empty canvas layin&apos; around 🎨).
            Let&apos;s connect!
          </p>
        </Reveal> */}
        <div className={styles.buttons}>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
          <Reveal>
            <MyLinks />
          </Reveal>
          <Reveal>
            <OutlineButton onClick={() => window.open("/Ryan Harden SWE Resume.pdf")}>
              My resume
            </OutlineButton>
          </Reveal>
        </div>
      </div>
      <DotGrid />
    </section>
  );
};
