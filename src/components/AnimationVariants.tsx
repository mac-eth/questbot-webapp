import { motion, Variants } from "framer-motion";

const fromLeftAnimation: Variants = {
  offscreen: {
    x: -100,
    rotate: 10,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const fromRightAnimation: Variants = {
  offscreen: {
    x: 100,
    rotate: -10,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const fromTopAnimation: Variants = {
    offscreen: {
      y: -100,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  
  const fromBottomAnimation: Variants = {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  const appearAnimation: Variants = {
    offscreen: {
      scale: 0.2,
      rotate: 30,
    },
    onscreen: {
        scale: 1,
        rotate: 0,
    },
  };

  export { fromLeftAnimation, fromRightAnimation, fromTopAnimation, fromBottomAnimation, appearAnimation };
