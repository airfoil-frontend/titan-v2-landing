'use client';

import { motion, useAnimation, type Variants } from 'motion/react';
import React, { useEffect, useState } from 'react';

interface ProgressComparisonProps {
  items: {
    name: string;
    value: number;
    maxValue: number;
  }[];
}

export function ProgressComparison({ items }: ProgressComparisonProps) {
  const controls = useAnimation();
  const [animationComplete, setAnimationComplete] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    // Start the animation after a short delay
    const timer = setTimeout(() => {
      controls.start('animate');
    }, 300);

    return () => clearTimeout(timer);
  }, [controls]);

  // Animation variants for the progress bar - duration matches the actual value
  const progressVariants: Variants = {
    initial: { width: 0 },
    animate: (item: { name: string; value: number; maxValue: number }) => ({
      width: `${(item.value / item.maxValue) * 100}%`,
      transition: {
        duration: item.value / 1000, // Convert ms to seconds
        ease: 'linear',
      },
    }),
  };

  // Handle animation complete for each item
  const handleAnimationComplete = (name: string) => {
    setAnimationComplete((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.name} className="space-y-2.5">
          <div className="flex items-center justify-between gap-2.5">
            <span className="flex-1 py-[.2188rem] text-lg leading-[1.125rem] tracking-[-0.0225rem]">
              {item.name}
            </span>
            <span className="font-mono text-base leading-[1.5rem] tracking-[.0625rem]">
              <Counter
                duration={item.value / 1000}
                from={0}
                isComplete={animationComplete[item.name]}
                to={item.value}
              />
              ms
            </span>
          </div>
          <div
            aria-label={`${item.name} performance: ${item.value} milliseconds`}
            aria-valuemax={item.maxValue}
            aria-valuemin={0}
            aria-valuenow={item.value}
            className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800"
            role="progressbar"
          >
            <motion.div
              animate={controls}
              className={`h-full rounded-full ${item.name === 'Titan' ? 'bg-[#F0D065]' : 'bg-gray-500'}`}
              custom={item}
              initial="initial"
              variants={progressVariants}
              onAnimationComplete={() => handleAnimationComplete(item.name)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

interface CounterProps {
  from: number;
  to: number;
  duration: number;
  isComplete?: boolean;
}

function Counter({ from, to, duration, isComplete }: CounterProps) {
  const [count, setCount] = React.useState(from);

  useEffect(() => {
    if (isComplete) {
      setCount(to);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(from + progress * (to - from)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration, isComplete]);

  return <>{count}</>;
}
