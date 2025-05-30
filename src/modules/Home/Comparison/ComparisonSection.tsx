'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { ComparisonItem } from './ComparisonItem';
import { TradeSlider } from './TradeSlider';

export const ComparisonSection = () => {
  const [competitorsTradeDiv, setCompetitorsTradeDiv] = useState(20);

  const isMobile = useMediaQuery('(max-width: 640px)');
  const [numberOfTrades, setNumberOfTrades] = useState(500);
  const titanTradeValue = Math.round(numberOfTrades / 8);
  const competitorsTradeValue = Math.round(
    numberOfTrades / competitorsTradeDiv,
  );

  useEffect(() => {
    if (isMobile) {
      setCompetitorsTradeDiv(25);
    } else {
      setCompetitorsTradeDiv(20);
    }
  }, [isMobile]);

  return (
    <section className="container">
      <div className="flex w-full flex-col gap-14 px-4 py-6 md:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-5 lg:max-w-[560px]">
          <h2 className="font-display text-primary text-[2rem] leading-[2.25rem] tracking-[-0.04rem] md:text-[2.5rem] md:leading-[2.8125rem] md:tracking-[-0.05rem] xl:text-[3rem] xl:leading-[3.375rem] xl:tracking-[-0.06rem]">
            Keep more of your profits
          </h2>
          <p className="text-base leading-[1.25rem] font-light tracking-[-0.01rem] text-gray-400 md:text-lg md:leading-6 md:tracking-[-0.0112rem]">
            Titan allows you to compare quotes from all routers on Solana and
            always routes you to the one with the best price.
          </p>
        </div>

        <TradeSlider
          numberOfTrades={numberOfTrades}
          setNumberOfTrades={setNumberOfTrades}
        />

        <div className="flex w-full flex-col items-start gap-6 sm:gap-8">
          <ComparisonItem
            className="bg-primary"
            title="With Titan"
            titleClassName="text-primary"
            tradeValue={titanTradeValue}
            value="Value here"
          />
          <ComparisonItem
            className="bg-gray-700"
            title="With Competitors"
            titleClassName="text-gray-300"
            tradeValue={competitorsTradeValue}
            value="Value here"
          />
        </div>
      </div>
    </section>
  );
};
