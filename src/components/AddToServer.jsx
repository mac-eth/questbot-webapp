import Image from "next/image";
import styles from "../styles/style";
import { arrowUp } from "../assets";
import { FadeInSection } from "../hooks/FadeInSection";

const AddToServer = () => (
  <FadeInSection>
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-purple-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] glow-on-hover rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-white">Add to</span>
          </p>
          <Image
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-white">Server</span>
        </p>
      </div>
    </div>
  </FadeInSection>
);

export default AddToServer;
