import styles from "../style";

const LoginButton = () => (
  <div
    className={`${styles.flexCenter}  ml-10 w-[80px] h-[40px] rounded-[10px] bg-purple-gradient glow-on-hover-small  p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-[10px]`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <div className="font-poppins font-medium text-[16px]">
          <div className="text-dimWhite hover:text-white active:text-white">
            <a href="#login" img="">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginButton;
