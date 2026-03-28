import { Variants } from "framer-motion";

// Staggered container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Fade up items
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Fade in from left
export const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Fade in from right
export const fadeRightItem: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Scale up
export const scaleUpItem: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Text reveal character by character
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

export const textRevealChar: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// 3D card hover values
export const card3DHover = {
  rest: { rotateX: 0, rotateY: 0, scale: 1, boxShadow: "0 4px 20px hsl(0 0% 0% / 0.1)" },
  hover: { scale: 1.03, boxShadow: "0 20px 40px hsl(0 0% 0% / 0.15), 0 0 30px hsl(var(--primary) / 0.1)" },
};

// Floating animation for background orbs
export const floatingOrb: Variants = {
  animate: {
    y: [0, -30, 0],
    x: [0, 15, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};
