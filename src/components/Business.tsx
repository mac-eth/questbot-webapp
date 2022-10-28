import React from "react";
import Image from "next/legacy/image";
import { features } from "../constants";
import styles, { layout } from "../styles/style";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  fromLeftAnimation,
  fromRightAnimation,
} from "./AnimationVariants";

const FeatureCard = (feature: {
  icon: string;
  title: string;
  content: string;
  index: number;
}) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      feature.index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Image
        src={feature.icon}
        alt="star"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {feature.title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {feature.content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section} snap-start`}>
    <div className={layout.sectionInfo}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={fromLeftAnimation}
        viewport={{ once: false }}
      >
        <h2 className={styles.heading2}>
          You <span className="text-gradient">focus</span> on your expanding{" "}
          <span className="text-gradient">business</span>,{" "}
          <br className="sm:block hidden" /> we’ll handle the{" "}
          <span className="text-gradient">rest</span>.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          QuestBot can be used in a multitude of different ways. Whether
          you&apos;re a tight knit gaming community, or a large scale business
          serving thousands of customers, QuestBot can help you achieve your
          goals.
        </p>
      </motion.div>

      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial="offscreen"
          whileInView="onscreen"
          variants={fromRightAnimation}
          viewport={{ once: false }}
        >
          <FeatureCard key={feature.id} {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Business;
