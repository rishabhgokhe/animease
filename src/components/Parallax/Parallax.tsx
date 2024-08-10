import * as React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallaxImageAndText({
  imageSrc,
  altText = "Parallax Image",
  children,
}: {
  imageSrc: string;
  altText?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="parallax-image-and-text-section" ref={ref}>
      <div className="image">
        <img
          src={imageSrc}
          alt={altText}
        />
      </div>
      <motion.div className="text-div" style={{ y }}>
        {children}
      </motion.div>
    </section>
  );
}