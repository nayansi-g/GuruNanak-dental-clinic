"use client";

// Shared viewport config keeps scroll-triggered animations consistent
// and avoids repeatedly replaying them as users move through the page.
export const viewportOnce = {
  once: true,
  amount: 0.2,
};

// Soft fade-up for sections and hero content.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger parent for text groups, cards, or repeated UI items.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// Slight zoom + fade for images and media blocks.
export const imageReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Reusable card hover motion keeps interactions subtle and professional.
export const cardHover = {
  y: -6,
  scale: 1.015,
  transition: {
    duration: 0.24,
    ease: "easeOut",
  },
};
