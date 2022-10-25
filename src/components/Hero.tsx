import React from "react";
import Image from "next/image";
import styles from "../styles/style";
import { discount, robot } from "../assets";
import AddToServer from "./AddToServer";
import { FadeInSection } from "../hooks/FadeInSection";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <FadeInSection>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Get <span className="text-white">Started</span> using Questbot{" "}
            <span className="text-white">100% Free!</span>
          </p>
        </div>
        </FadeInSection>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <FadeInSection>
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
            </FadeInSection>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <AddToServer />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <FadeInSection>
          Of Play<span className="text-gradient">2</span>Earn
          </FadeInSection>
        </h1>
        <FadeInSection>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          QuestBot has been meticlously designed to increase social engagement
          whilst creating a fun, gamified experience for everyone.
        </p>
        </FadeInSection>
      </div>

      <FadeInSection>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image
          src={robot}
          alt="EarnRewards"
          className="w-[100%] h-[100%] scale-110 relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      </FadeInSection>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <AddToServer />
      </div>
    </section>
  );
};

export default Hero;