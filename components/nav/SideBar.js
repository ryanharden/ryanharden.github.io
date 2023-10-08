import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");
  // const [bgColor, setBgColor] = useState("transparent");
  const [hasBackground, setHasBackground] = useState(false);
  const sectionThresholds = {
    hero: 0.6,
    about: 0.8,
    projects: 0.4,
    experience: 1,
    contact: 1
  };

  // const sectionRootMargins = {
  //   hero: "70px 0px 0px 0px",
  //   about: "70px 0px 0px 0px",
  //   projects: "-700px 0px 0px 0px",  // Adjust this negative top value to make it trigger earlier when scrolling up
  //   experience: "70px 0px 0px 0px",
  //   contact: "70px 0px 0px 0px"
  // };

  let lastScrollPosition = 0;

  // useEffect(() => {
  //   function handleScroll() {
  //     const currentScrollPosition = window.scrollY;

  //     if (currentScrollPosition < lastScrollPosition) {
  //       // User is scrolling up
  //       const heroRect = document.querySelector("#hero").getBoundingClientRect();
  //       const skillsTop = document.querySelector("#experience").getBoundingClientRect().top;
  //       const aboutRect = document.querySelector("#about").getBoundingClientRect();
  //       const projectsRect = document.querySelector("#projects").getBoundingClientRect();

  //       const projectsVisibleHeight = Math.min(projectsRect.bottom, window.innerHeight) - Math.max(projectsRect.top, 0);
  //       const potentialMaxVisibleHeight = Math.min(window.innerHeight, projectsRect.bottom - projectsRect.top);

  //       // Determine if the "about" section is visible
  //       const aboutVisible = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
  //       // Determine if the "hero" section is the most visible
  //       const heroMostVisible = heroRect.bottom > window.innerHeight * 0.5;

  //       if (skillsTop <= window.innerHeight && skillsTop >= 0) {
  //         setSelected("experience");
  //       } else if (heroMostVisible) {
  //         setSelected("hero");
  //       } else if (aboutVisible && (aboutRect.bottom - aboutRect.top > projectsVisibleHeight)) {
  //         setSelected("about");
  //       } else if (projectsVisibleHeight >= potentialMaxVisibleHeight * 0.5) {
  //         setSelected("projects");
  //       }
  //     }

  //     lastScrollPosition = currentScrollPosition;
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      // For each section, check its visibility
      const sections = ["hero", "about", "projects", "experience", "contact"];
      for (let sectionId of sections) {
        const section = document.querySelector(`#${sectionId}`);
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = rect.height;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        if (visibleHeight / viewportHeight > 0.5 || visibleHeight / sectionHeight > 0.5) {
          setSelected(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // const scrollToSection = (sectionId) => {
  //   if (sectionId === "hero") {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //     return;  // Exit the function early
  //   }
  //   let yOffset = -80;
  //   const viewportHeight = window.innerHeight;
  //   console.log(viewportHeight)
  //   if (sectionId === "projects") {
  //     if (viewportHeight < 996) {
  //       yOffset += 100;  // Additional offset for smaller viewports
  //     }
  //   }

  //   if (sectionId === "experience") {
  //     if (viewportHeight < 996) {
  //       yOffset += 80;  // Additional offset for smaller viewports
  //     }
  //   }
  //   const element = document.getElementById(sectionId);
  //   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({ top: y, behavior: 'smooth' });
  // };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    let yOffset = -70;  // a general buffer, adjust as needed

    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;  // Exit the function early
    }

    // Get the title's position if it exists within the section
    const titleElement = element.querySelector(".section-header");  // Assuming SectionHeader has a class "section-header"
    if (titleElement) {
      yOffset += titleElement.getBoundingClientRect().top - element.getBoundingClientRect().top;
    }

    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper, .heroWrapper");

    // const callback = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       setSelected(entry.target.id);
    //     }
    //   });
    // };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSection = entry.target.id;
          if (currentSection !== 'contact' || window.scrollY + window.innerHeight === document.documentElement.scrollHeight) {
            setSelected(currentSection);
          }
        }
      });
    };
    // const callback = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       const currentSection = entry.target.id;

    //       if (currentSection !== 'contact' || (document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) <= 10)) {
    //         setSelected(currentSection);
    //       }
    //     }
    //   });
    // };



    // Create a set of observers
    const observers = [];

    sections.forEach((section) => {
      const threshold = sectionThresholds[section.id] || 0.6; // default to 0.6 if not specified
      const rootMargin = "70px 0px 0px 0px"; // default root margin

      const options = {
        threshold: threshold,
        rootMargin
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(section);
      observers.push(observer);
    });

    // Cleanup observers on component unmount
    return () => {
      observers.forEach(observer => observer.disconnect());
    };

  }, []);

  // Change Navbar Color when past hero section
  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = document.querySelector("#about").offsetTop;
      const sidebarHeight = document.querySelector("." + styles.sideBar).offsetHeight;

      if (window.scrollY + sidebarHeight > aboutTop) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      // style={{ backgroundColor: bgColor }}
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      href="#hero"
      className={`${styles.sideBar} ${hasBackground ? styles.hasBackground : ""}`}
    >
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          setSelected("hero");  // Prevent default behavior
          scrollToSection("hero");
        }}
        className={selected === "hero" ? styles.selected : ""}
      >
        <span className={`${styles.logo} ${selected === "hero" ? styles.selected : ""}`}>
          RH<span>.</span>
        </span>
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={(e) => {
          e.preventDefault();  // Prevent default behavior
          setSelected("about");
          scrollToSection("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={(e) => {
          e.preventDefault();  // Prevent default behavior
          setSelected("projects");
          scrollToSection("projects");
        }}
        className={selected === "projects" ? styles.selected : ""}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={(e) => {
          e.preventDefault();  // Prevent default behavior
          setSelected("experience");
          scrollToSection("experience");
        }}
        className={selected === "experience" ? styles.selected : ""}
      >
        Skills
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={(e) => {
          e.preventDefault();  // Prevent default behavior
          setSelected("contact");
          scrollToSection("contact");
        }}
        className={selected === "contact" ? styles.selected : ""}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};
