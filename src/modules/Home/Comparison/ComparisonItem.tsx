import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { cn } from '@/common/functions/cn';

interface ComparisonItemProps {
  title: string;
  value: string;
  className?: string;
  titleClassName?: string;
  tradeValue: number;
}

/**
 * Scales a value from 0-100 to a percentage that maxes out at maxPercentage
 * @param value - The slider value (0-100)
 * @param maxPercentage - The maximum percentage the bar should reach
 * @returns The scaled percentage for the progress bar
 */
function getScaledBarPercentage(value: number, maxPercentage: number): number {
  // Ensure value is within 0-100 range
  const clampedValue = Math.max(0, Math.min(100, value));

  // Scale the value to max out at maxPercentage
  const scaledPercentage = (clampedValue / 100) * maxPercentage;

  return Number(scaledPercentage.toFixed(1));
}

export const ComparisonItem = ({
  title,
  value,
  className,
  titleClassName,
  tradeValue,
}: ComparisonItemProps) => {
  const [remainingWidthPercentage, setRemainingWidthPercentage] = useState(0);
  const commonTextClassName =
    'text-lg leading-6 font-medium tracking-[-0.0225rem]';

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const information = document.getElementById('information');
      const wrapper = document.getElementById('wrapper');
      if (information && wrapper) {
        const totalWidth = wrapper.offsetWidth;
        const informationWidth = information.offsetWidth;
        const gap = getComputedStyle(wrapper).gap;

        const gapWidth = gap.replace('px', '');
        const gapWidthNumber = Number(gapWidth);

        const availableWidth = totalWidth - informationWidth - gapWidthNumber;
        const percentage = (availableWidth / totalWidth) * 100;

        setRemainingWidthPercentage(percentage);
      }
    });

    observer.observe(document.getElementById('wrapper'));

    return () => observer.disconnect();
  }, []);

  const tradeValuePercentage = getScaledBarPercentage(
    tradeValue,
    remainingWidthPercentage,
  );

  return (
    <div
      className="flex w-full items-center gap-[var(--gap-in-between)] [--gap-in-between:16px] sm:[--gap-in-between:32px]"
      id="wrapper"
    >
      <motion.div
        animate={{
          width: `${tradeValuePercentage}%`,
        }}
        className={cn('h-10 rounded-full md:h-11', className)}
        transition={{
          duration: 0.09,
        }}
      />

      <div
        className="flex flex-col justify-center text-left whitespace-nowrap"
        id="information"
      >
        <h3 className={cn(commonTextClassName, titleClassName)}>{title}</h3>
        <p className={cn(commonTextClassName, 'text-gray-500')}>{value}</p>
      </div>
    </div>
  );
};
