'use client';

import { cn } from '@/common/functions/cn';

import { JoinWaitlist } from '@/modules/Home/Hero/JoinWaitlist';
import { SwapView } from '@/modules/Home/Hero/SwapView';

export const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto mt-[6rem] mb-[6.25rem] w-full max-w-[1280px] px-4 sm:px-6 md:mt-[8.5rem] lg:mt-[11rem] lg:px-8">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row xl:gap-[8.5rem]">
          <div className="mx-auto max-w-[37rem] lg:flex-1">
            <h1
              className={cn(
                'text-primary font-display',
                'lg:text-[3.5rem] lg:leading-[3.9375rem] lg:tracking-[-0.14rem]',
                'md:text-[3rem] md:leading-[3.375rem] md:tracking-[-0.06rem]',
                'text-[2.5rem] leading-[2.8125rem] tracking-[-0.075rem]',
              )}
            >
              For traders who want the{' '}
              <br className="hidden sm:block lg:hidden" /> best price — every
              time
            </h1>
            <p className="mt-6 max-w-[35rem] text-lg leading-6 font-light tracking-[-0.0112rem] text-gray-200">
              Purus quam egestas nascetur at. Vitae sodales suspendisse urna
              facilisis adipiscing praesent lectus. Elementum leo et a.
            </p>

            <JoinWaitlist />
          </div>
          <SwapView />
        </div>
      </div>
    </div>
  );
};
