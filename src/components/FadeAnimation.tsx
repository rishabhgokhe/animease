import * as React from "react";
import { MotionBlockData } from "../Data/FramerAnimationData";
import { MotionProps } from "framer-motion";

interface FadeProps extends MotionProps {
  children: React.ReactNode;
  variant: string;
  delay?: number;
  duration?: number;
  className?: string;
  exitAnimation?: boolean;
}

const FadeAnimation: React.FC<FadeProps> = ({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  className,
  initial,
  animate,
  exit,
  exitAnimation = false,
}) => {
  const motionComponent = MotionBlockData.find(
    (item) => item.variant === variant
  )?.component;

  if (!motionComponent) {
    console.error(`Motion component for variant "${variant}" not found.`);
    return null;
  }

  const properties = {
    initial: initial,
    animate: animate,
    exit: exitAnimation ? exit : undefined,
    transition: { delay, duration },
    className,
  };

  return React.createElement(motionComponent, properties, children);
};

export const FadeUp: React.FC<FadeProps> = (props) => (
  <FadeAnimation
    {...props}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -20, opacity: 0 }}
  />
);

export const FadeDown: React.FC<FadeProps> = (props) => (
  <FadeAnimation
    {...props}
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
  />
);

const FadeHorizontal: React.FC<FadeProps> = ({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  className,
  initial,
  animate,
  exit,
  exitAnimation,
}) => {
  const motionComponent = MotionBlockData.find(
    (item) => item.variant === variant
  )?.component;

  if (!motionComponent) {
    console.error(`Motion component for variant "${variant}" not found.`);
    return null;
  }

  const properties = {
    initial: initial,
    animate: animate,
    exit: exitAnimation ? exit : undefined,
    transition: { delay, duration },
    className,
  };

  return React.createElement(motionComponent, properties, children);
};

export const FadeRight: React.FC<FadeProps> = (props) => (
  <FadeHorizontal
    {...props}
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 20, opacity: 0 }}
  />
);

export const FadeLeft: React.FC<FadeProps> = (props) => (
  <FadeHorizontal
    {...props}
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -20, opacity: 0 }}
  />
);