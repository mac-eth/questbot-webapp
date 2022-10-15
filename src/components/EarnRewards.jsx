import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const EarnRewards = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Earn daily <span className="text-gradient">rewards</span> <br className="sm:block hidden" />
        just from chatting.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        QuestBot gives out rewards which vary from discord-roles to virtual gold and even game-assets.
        Earning these rewards are as easy as sending memes or talking to your friends.
      </p>
    </div>
  </section>
);

export default EarnRewards;