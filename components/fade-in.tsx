"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 1, 0.35, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
