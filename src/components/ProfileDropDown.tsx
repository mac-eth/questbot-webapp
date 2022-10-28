import React from "react";
import styles from "../styles/style";
import Image from "next/legacy/image";
import Link from "next/link";
import { forwardRef, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ProfileDropdownOptions } from "../constants";
import { signIn, signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function ProfileDropDown(props: {session: Session}) {
  //const { data: session, status } = useSession();

  var image = props.session?.user?.image;
  if (!image) {image = ""} // TO DO: Add a default image
  
  var username = props.session?.user?.name;
  if (!username) {username = ""} // TO DO: Add a default username

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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-purple-gradient shadow-lg">
          {ProfileDropdownOptions.map((ProfileDropdownOptions, index) => (
            <Menu.Item key={index} as={Fragment}>
              {({ active }) => (
                (<Link
                  href={ProfileDropdownOptions.href}
                  className={`${
                    active ? "bg-primary text-white" : "text-gray-900"
                  } group font-poppins font-medium text-[12px] flex w-full items-center rounded-md px-4 py-2 text-sm}`}>

                  {ProfileDropdownOptions.title}

                </Link>)
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
