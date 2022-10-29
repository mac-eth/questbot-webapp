import React from "react";
import Image from "next/legacy/image";
import styles from "../styles/style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { motion } from "framer-motion";
import { fromBottomAnimation } from "./AnimationVariants";

const Footer = () => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={fromBottomAnimation}
    viewport={{ once: false }}
  >
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Image
            src={logo}
            alt="questbot_logo"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <div role='text' aria-label='description' className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            Boosting engagement with the next generation of Play2Earn.
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              aria-label={footerlink.title}
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    aria-label={link.name}
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <div role='text' aria-label='copyright' className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 QuestBot. All Rights Reserved.
        </div>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default Footer;
