import Image from "next/legacy/image";
import { discount } from "../../assets";
import styles from "../../styles/style";

const HeroMicroBanner = () => {
  return (
    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2" role="HeroMicroBanner">
      <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
      <p className={`${styles.paragraph} ml-2`}>
        Get <span className="text-white">Started</span> using Questbot{" "}
        <span className="text-white">100% Free!</span>
      </p>
    </div>
  );
};

export default HeroMicroBanner;
