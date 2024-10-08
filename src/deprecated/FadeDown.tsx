import * as React from "react";
import { MotionBlockData } from "../Data/FramerAnimationData";

interface FadeDownProps {
  children: React.ReactNode;
  variant: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeDown: React.FC<FadeDownProps> = ({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  className,
}) => {
  const properties = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration },
    className,
  };

  const motionComponent = MotionBlockData.find(
    (item) => item.variant === variant
  )?.component;

  if (!motionComponent) {
    return null;
  }

  return React.createElement(motionComponent, properties, children);
};

export default FadeDown;