"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 18%"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2, 1], [18, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 1], [0.82, 1, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="relative"
    >
      {children}
    </motion.section>
  );
}
