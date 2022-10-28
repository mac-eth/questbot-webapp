import React from "react";
import styles from "../styles/style";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import { appearAnimation } from "./AnimationVariants";

const CTA = () => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={appearAnimation}
    viewport={{ once: false }}
  >
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Install QuestBot for <span className="text-gradient">Free</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Improve engagement, grow your social audience, and create a fun
          community with QuestBot.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <GetStarted />
      </div>
    </section>
  </motion.div>
);

export default CTA;
