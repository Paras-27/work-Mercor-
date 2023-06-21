import React from "react";

import { LampOn } from "../../assets/icons/LampOn";

import styles from "./Thoughts.module.css";

export default function Thoughts() {
  return (
    <div className={styles.thoughts}>
      <div className={styles.lamp}>
        <span className={styles.innerEllipse}></span>
        <LampOn />
      </div>
      <section className={styles.thoughtsText}>
        <h2 className={styles.title}>Thoughts Time</h2>
        <p className={styles.description}>
          We don't have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button className={styles.textButton}>Write a message</button>
      </section>
    </div>
  );
}
