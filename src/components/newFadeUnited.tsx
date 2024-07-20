import * as React from "react";
import { MotionBlockData } from "../Data/FramerAnimationData";
import { MotionProps } from "framer-motion";

interface FadeProps extends MotionProps {
  children: React.ReactNode;
  variant: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const Fade: React.FC<FadeProps> = ({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  className,
  initial,
  animate,
  transition,
}) => {
  const properties = {
    initial: initial || { opacity: 0, y: -20 },
    animate: animate || { opacity: 1, y: 0 },
    transition: transition || { delay, duration },
    className,
  };

  const motionComponent = MotionBlockData.find(
    (item) => item.variant === variant
  )?.component;

  if (!motionComponent) {
    console.error(`Motion component for variant "${variant}" not found.`);
    return null;
  }

  return React.createElement(motionComponent, properties, children);
};

export const FadeDown: React.FC<FadeProps> = (props) => (
  <Fade
    {...props}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  />
);

export const FadeUp: React.FC<FadeProps> = (props) => (
  <Fade
    {...props}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  />
);
