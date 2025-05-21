'use client';

import { useState } from 'react';

import { ComparisonItem } from './ComparisonItem';
import { TradeSlider } from './TradeSlider';

export const FeaturesSection = () => {
  const [numberOfTrades, setNumberOfTrades] = useState(500);
  const titanTradeValue = Math.round(numberOfTrades / 10);
  const jupiterTradeValue = Math.round(numberOfTrades / 15);

  return (
    <section className="container">
      <div className="flex w-full flex-col gap-24 px-4 py-6 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-5 lg:max-w-[560px]">
          <h2 className="font-display text-primary text-[3rem] leading-[3.375rem] tracking-[-0.06rem]">
            Keep more of your profits
          </h2>
          <p className="md:h text-lg leading-6 tracking-[-0.0112rem] text-gray-400">
            Nunc integer nullam ultrices in vestibulum. Augue faucibus vitae
            quisque nisi felis. Vitae a enim ut massa et consequat. Quisque
            sagittis eget ligula non neque turpis semper. Tristique velit lacus.
          </p>
        </div>

        <TradeSlider
          numberOfTrades={numberOfTrades}
          setNumberOfTrades={setNumberOfTrades}
        />

        <div className="flex w-full flex-col items-start gap-8">
          <ComparisonItem
            className="bg-primary"
            title="With Titan"
            titleClassName="text-primary"
            tradeValue={titanTradeValue}
            value="Value here"
          />
          <ComparisonItem
            className="bg-gray-700"
            title="With Jupiter"
            titleClassName="text-gray-300"
            tradeValue={jupiterTradeValue}
            value="Value here"
          />
        </div>
      </div>
    </section>
  );
};
