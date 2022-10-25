/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { feedback } from "../constants";
import styles from "../styles/style";
import FeedbackCard from "./FeedbackCard";
import { FadeInSection } from "../hooks/FadeInSection";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] fadein">
      <h2 className={styles.heading2}>
        <FadeInSection>
          What People are <br className="sm:block hidden" /> saying about us
        </FadeInSection>
      </h2>

      <div className="w-full md:mt-0 mt-3">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          <FadeInSection>
            Don't take our word for how great QuestBot is, see what our users think.
          </FadeInSection>
        </p>
      </div>
    </div>

    {/*<div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FadeInSection key={card.id}>
        <FeedbackCard key={card.id} {...card} />
        </FadeInSection>
      ))}
      </div>     COMMENTED THIS OUT BECAUSE CARD INPUT BEING MAPPED DOESN'T SEEM TO EXIST */}
  </section>
);

export default Testimonials;
