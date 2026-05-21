import { useEffect, useState } from 'react';
import { useMotionValue, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const AnimatedCounter = ({ value, duration = 2, prefix = "", suffix = "", decimals = 0 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });
    return () => controls.stop();
  }, [count, value, duration]);

  return (
    <span>{prefix}{displayValue.toFixed(decimals)}{suffix}</span>
  );
};
