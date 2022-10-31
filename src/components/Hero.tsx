import React from "react";
import Image from "next/legacy/image";
import styles from "../styles/style";
import { robot } from "../assets";
import AddToServer from "./AddToServer";
import HeroMicroBanner from "./HeroMicroBanner";
import { motion } from "framer-motion";
import {
  appearAnimation,
} from "./AnimationVariants";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} snap-start`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={appearAnimation}
          viewport={{ once: false }}
        >
          <HeroMicroBanner />
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={appearAnimation}
            viewport={{ once: false }}
          >
            <h1
              role="text"
              aria-label="heading1"
              className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
            >
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
          </motion.div>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <AddToServer />
          </div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={appearAnimation}
          viewport={{ once: false }}
        >
          <h1
            role="text"
            aria-label="heading2"
            className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          >
            Of Play<span className="text-gradient">2</span>Earn
          </h1>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={appearAnimation}
          viewport={{ once: false }}
        >
          <p
            role="text"
            aria-label="description"
            className={`${styles.paragraph} max-w-[470px] mt-5`}
          >
            QuestBot has been meticlously designed to increase social engagement
            whilst creating a fun, gamified experience for everyone.
          </p>
        </motion.div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={appearAnimation}
          viewport={{ once: false }}
        >
          <Image
            src={robot}
            alt="robot"
            className="w-[100%] h-[100%] scale-110 relative z-[5]"
          />
        </motion.div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={appearAnimation}
          viewport={{ once: false }}
        >
          <AddToServer />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
