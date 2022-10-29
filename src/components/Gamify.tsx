import React from "react";
import Image from "next/legacy/image";
import { card } from "../assets";
import styles, { layout } from "../styles/style";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  fromLeftAnimation,
  fromRightAnimation,
} from "./AnimationVariants";

const Gamify = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={fromLeftAnimation}
        viewport={{ once: false }}
      >
        <div role='text' aria-label='heading' className={styles.heading2}>
          <span className="text-gradient">Gamify</span> your server{" "}
          <br className="sm:block hidden" /> in a few easy steps.
        </div>
        <p role='text' aria-label='description' className={`${styles.paragraph} max-w-[470px] mt-5`}>
          QuestBot comes with a built-in game system that allows you to create
          quests and rewards for your server members. This not only makes your
          server more fun but also helps grow your community.
        </p>
      </motion.div>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={fromRightAnimation}
        viewport={{ once: false }}
      >
        <Image src={card} alt="EarnRewards" className="w-[100%] h-[100%]" />
      </motion.div>
    </div>
  </section>
);

export default Gamify;
