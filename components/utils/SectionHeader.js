import React from 'react';
import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

export const SectionHeader = React.forwardRef(({ title, dir = "r" }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
});
