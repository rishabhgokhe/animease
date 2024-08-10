import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface AnimateSvgPathProps extends SVGMotionProps<SVGPathElement> {
  d: string;
  duration?: number;
  fillColor?: string;
}

export const AnimateSvgPath: React.FC<AnimateSvgPathProps> = ({
  d,
  duration = 2,
  fillColor = "rgba(255, 255, 255, 0)",
  ...props
}) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: fillColor,
    },
  };

  return (
    <motion.path
      {...props}
      d={d}
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        default: { duration, ease: "easeInOut" },
        fill: { duration, ease: [1, 0, 0.8, 1] },
      }}
    />
  );
};