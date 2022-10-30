import React from "react";
import styles from "../styles/style";
import Image from "next/legacy/image";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ProfileDropdownOptions } from "../constants";
import { Session } from "next-auth";
import { signout, settings } from "src/assets";

export default function ProfileDropDown(props: { session: Session }) {
  //const { data: session, status } = useSession();

  var image = props.session?.user?.image;
  if (!image) {
    image = "";
  } // TO DO: Add a default image

  var username = props.session?.user?.name;
  if (!username) {
    username = "";
  } // TO DO: Add a default username

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div
        className={`${styles.flexCenter}  ml-10 w-[60px] h-[60px] rounded-full bg-purple-gradient glow-on-hover  p-[2px] cursor-pointer`}
      >

        <Menu.Button
          className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}
        >
          <Image
            className="rounded-full"
            src={image}
            alt="user PFP"
            role={username}
            width={60}
            height={60}
            layout="fill"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute outline outline-1 outline-gray-400 right-0 w-56 origin-top-right font-poppins rounded-md bg-primary shadow-lg divide-y divide-gray-400">
          <div className="bg-gray-800 rounded-md px-4 py-4">
            <div className="text-gray-100 text-[16px]">{username}</div>
            <div className="text-gray-300 text-[12px]">View Profile</div>
          </div>
          <div className="py-2 px-2">
            {ProfileDropdownOptions.map((ProfileDropdownOptions, index) => (
              <Menu.Item key={index} as="div">
                <div className={`${styles.dropdowntitle}`}>
                  {ProfileDropdownOptions.title}
                </div>
                {ProfileDropdownOptions.Links.map((Links, index) => (
                  <Menu.Item key={index} as={Fragment}>
                    <Link href={Links.href}>
                      <div className={`${styles.dropdownlink}`}>
                        {Links.title}
                      </div>
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Item>
            ))}
          </div>
          <Menu.Item as="div">
            <div className="py-2 px-2">
                <div className={`${styles.dropdownlink} flex flex-row gap-x-2`}>
                <Image src={settings} alt="settings" width={16} height={16}/>
                {"Settings"}
                </div>
                <div className={`${styles.dropdownlink} flex flex-row gap-x-1.5`}>
                <Image src={signout} alt="signout" width={18} height={18}/>
                {"Sign Out"}
                </div>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
