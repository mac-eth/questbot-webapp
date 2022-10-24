import styles from "../styles/style";

import { signIn, signOut, useSession } from "next-auth/react";
import ProfileDropdown from "./ProfileDropDown";

const LoginButton = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <div
        className={`${styles.flexCenter}  ml-10 w-[80px] h-[40px] rounded-[10px] bg-purple-gradient glow-on-hover-small  p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-[10px]`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <div className="font-poppins font-medium text-[16px]">
              <div className="text-dimWhite hover:text-white active:text-white">
                <button onClick={() => signIn("discord")}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (session) {
    return (
      <div>
        <ProfileDropdown />
      </div>
    );
  }
};

export default LoginButton;
