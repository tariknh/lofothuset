export const topMobile = {
  initial: {
    y: "-100vh",
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const bottomMobile = {
  initial: {
    y: "50vh",
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const staggerChildren = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.2,
      staggerDirection: 0.5,
    },
  },
};

export const delayChildren = {
  initial: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.2,
    },
  },
};

export const up = {
  initial: {
    y: "10vh",
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const textAnimate = {
  initial: {
    x: "-60vw",
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};
