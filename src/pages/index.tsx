import React from "react";
import styles from "../styles/style";
import { EarnRewards, Business, Gamify, Clients, CTA, Footer, Navbar, Stats,  Hero } from "../components/index";

const Home = () => (
  <div className="bg-primary w-full">

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
        <Stats />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <EarnRewards />
        <Gamify />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
