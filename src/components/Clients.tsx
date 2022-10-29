import React from "react";
import Image from "next/legacy/image";
import { clients } from "../constants";
import styles from "../styles/style";
import { motion } from "framer-motion";
import { appearAnimation } from "./AnimationVariants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={appearAnimation}
            viewport={{ once: false }}
          >
            <Image
              src={client.logo}
              aria-label={client.id}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
