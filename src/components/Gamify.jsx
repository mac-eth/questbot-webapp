import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Gamify = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-gradient">Gamify</span> your server <br className="sm:block hidden" /> in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        QuestBot comes with a built-in game system that allows you to create quests and rewards for your server members. 
        This not only makes your server more fun but also helps grow your community.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="EarnRewards" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Gamify;
