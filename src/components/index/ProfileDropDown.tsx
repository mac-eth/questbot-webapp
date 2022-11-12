import React from "react";
import styles from "../../styles/style";
import Image from "next/legacy/image";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ProfileDropdownOptions } from "../../constants";
import { signout, settings, down } from "src/assets";
import { useSession } from "src/hooks/useSession";

export default function ProfileDropDown() {
  const { data: session } = useSession();
  const image = session?.user?.image as string;
  const username = session?.user?.name as string;
  const email = session?.user?.email as string;
  const discordUser = session?.discordUser?.id as string;

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex flex-row justify-center items-center gap-x-3 w-[100%] h-[100%]`}
          >
            <div
              className={`${styles.flexCenter}  ml-10 w-[60px] h-[60px] rounded-full bg-purple-gradient glow-on-hover  p-[2px] cursor-pointer`}
            >
              <div className={`bg-black rounded-full`}>
                <Image
                  className="absolute rounded-full"
                  src={image}
                  alt="user PFP"
                  role={username}
                  width={60}
                  height={60}
                  layout="fill"
                />
              </div>
            </div>
            <Image
              src={down}
              width={16}
              height={16}
              className={`absolute ${open ? "rotate-180" : ""}`}
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute backdrop-blur-xl backdrop-brightness-75 outline outline-1 outline-black right-0 w-56 origin-top-right font-poppins rounded-md shadow-lg divide-y divide-black">
              <div className="rounded-md px-4 py-4">
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
                  <div className={`${styles.dropdownlink}`}>
                    <Link className="flex flex-row gap-x-2" href="/settings">
                      <Image
                        src={settings}
                        alt="settings"
                        width={16}
                        height={16}
                      />
                      {"Settings"}
                    </Link>
                  </div>
                  <div className={`${styles.dropdownlink}`}>
                    <Link
                      className="flex flex-row gap-x-2"
                      href="/api/auth/signout"
                    >
                      <Image
                        src={signout}
                        alt="signout"
                        width={18}
                        height={18}
                      />
                      {"Sign Out"}
                    </Link>
                  </div>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
