'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import {
  Aggregator1,
  Aggregator2,
  Aggregator3,
  Aggregator4,
  TitanIcon,
} from '@/common/components/CustomIcon';
import { cn } from '@/common/functions/cn';

const aggregators = [
  {
    name: 'Titan',
    logo: <TitanIcon className="-translate-x-6" />,
    value: '$10,023.20',
    logoWidth: 88,
    logoAspect: '6.29',
  },
  {
    name: 'Aggregator 1',
    logo: <Aggregator1 />,
    value: '$10,023.00',
    logoWidth: 24,
    logoAspect: 1,
  },
  {
    name: 'Aggregator 2',
    logo: <Aggregator2 />,
    value: '$10,011.75',
    logoWidth: 24,
    logoAspect: '0.8',
  },
  {
    name: 'Aggregator 3',
    logo: <Aggregator3 />,
    value: '$10,010.50',
    logoWidth: 96,
    logoAspect: '4',
  },
  {
    name: 'Aggregator 4',
    logo: <Aggregator4 />,
    value: '$10,010.50',
    logoWidth: 26,
    logoAspect: 1.08,
  },
  {
    name: 'Aggregator 5',
    value: '$10,008.50',
    logoWidth: 26,
    logoAspect: 1.08,
  },
  {
    name: 'Aggregator 6',
    value: '$10,007.50',
    logoWidth: 26,
    logoAspect: 1.08,
  },
];

// Add this at the top level with other constants
const PRICE_LIST = [
  '$10,023.20',
  '$10,023.00',
  '$10,021.75',
  '$10,020.50',
  '$10,019.25',
  '$10,018.00',
  '$10,016.75',
  '$10,015.50',
  '$10,014.25',
  '$10,013.00',
];

const shuffleAggregators = () => {
  // Create a copy of the aggregators array
  const shuffled = [...aggregators];

  // Remove Titan, Aggregator 5, and Aggregator 6
  const titan = shuffled.find((a) => a.name === 'Titan');
  const agg5 = shuffled.find((a) => a.name === 'Aggregator 5');
  const agg6 = shuffled.find((a) => a.name === 'Aggregator 6');

  const middleAggregators = shuffled.filter(
    (a) =>
      a.name !== 'Titan' &&
      a.name !== 'Aggregator 5' &&
      a.name !== 'Aggregator 6',
  );

  // Shuffle the middle aggregators
  for (let i = middleAggregators.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [middleAggregators[i], middleAggregators[j]] = [
      middleAggregators[j],
      middleAggregators[i],
    ];
  }

  // Determine if Titan should be first (80% chance)
  const shouldTitanBeFirst = Math.random() < 0.8;

  // Construct the final array
  const result = [];

  if (shouldTitanBeFirst && titan) {
    // Titan gets the highest price when it's first
    result.push({ ...titan, value: PRICE_LIST[0] });
    // Assign remaining prices to middle aggregators
    middleAggregators.forEach((agg, index) => {
      result.push({ ...agg, value: PRICE_LIST[index + 1] });
    });
  } else {
    // Middle aggregators get the higher prices
    middleAggregators.forEach((agg, index) => {
      result.push({ ...agg, value: PRICE_LIST[index] });
    });
    // Titan gets a lower price when not first
    if (titan) {
      const titanIndex = Math.floor(PRICE_LIST.length * 0.7); // 70% down the list
      result.push({ ...titan, value: PRICE_LIST[titanIndex] });
    }
  }

  // Always add Aggregator 5 and 6 at the end with the lowest prices
  if (agg5) result.push({ ...agg5, value: PRICE_LIST[PRICE_LIST.length - 2] });
  if (agg6) result.push({ ...agg6, value: PRICE_LIST[PRICE_LIST.length - 1] });

  return result;
};

export const PriceTable = () => {
  // Use state to store the shuffled aggregators
  const [displayedAggregators, setDisplayedAggregators] = useState<
    typeof aggregators
  >([]);

  // Update the display periodically
  useEffect(() => {
    setDisplayedAggregators(shuffleAggregators());

    const interval = setInterval(() => {
      setDisplayedAggregators(shuffleAggregators());
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  if (!displayedAggregators.length) return <div className="w-full"></div>;

  return (
    <div className="relative w-full overflow-hidden px-4 md:px-16 lg:px-15 xl:pt-10">
      <div className="bg-bg-main rounded-l-2xl rounded-r-2xl border-t border-r border-l border-[#262626] p-3">
        <div
          className="rounded-tl-lg rounded-tr-lg border-t border-r border-l border-[#292824] bg-gray-900"
          style={{
            background:
              'linear-gradient(0deg, rgba(28, 27, 23, 0.5) 0%, rgba(28, 27, 23, 0.5) 100%), linear-gradient(0deg, rgba(20, 19, 16, 0.5) 0%, rgba(20, 19, 16, 0.5) 100%)',
          }}
        >
          <div className="flex justify-between border-b border-gray-800 p-4">
            <span className="text-[15px] leading-5 font-semibold text-gray-300">
              Aggregator
            </span>
            <span className="text-[15px] leading-5 font-semibold text-gray-300">
              USD Value
            </span>
          </div>
          {/* Scrollable area with fixed height */}
          <div className="relative max-h-[376px] overflow-hidden">
            <AnimatePresence initial={false}>
              {displayedAggregators.map((aggregator) => (
                <motion.div
                  key={aggregator.name}
                  layout
                  animate={{ opacity: 1 }}
                  className={cn(
                    'flex border-b border-gray-800 p-4',
                    aggregator.logo ? 'justify-between' : 'justify-end',
                  )}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  layoutId={aggregator.name}
                  transition={{
                    layout: {
                      type: 'spring',
                      stiffness: 150,
                      damping: 25,
                    },
                    opacity: { duration: 0.3 },
                  }}
                >
                  {aggregator.logo && aggregator.logo}
                  <span className="font-mono text-[15px] leading-5 font-medium text-gray-50">
                    {aggregator.value}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
            {/* Fade mask */}
            <div className="from-bg-main pointer-events-none absolute bottom-0 left-0 h-8 w-full rounded-b-2xl bg-gradient-to-t to-transparent" />
          </div>
        </div>
      </div>
      {/* Masking the bottom of the pricing table */}
      <div
        className="pointer-events-none absolute -inset-x-[3px] bottom-0 z-20 h-40"
        style={{
          background: 'linear-gradient(0deg, #100e0a 29%, transparent 100%)',
        }}
      />
    </div>
  );
};
