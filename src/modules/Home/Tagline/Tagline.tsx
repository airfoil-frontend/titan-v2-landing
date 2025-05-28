import Image from 'next/image';

import { cn } from '@/common/functions/cn';

import { Orb } from '@/modules/Home/Tagline/Orb';

export const Tagline = () => {
  return (
    <div className="mb-[5rem] w-full md:mb-[6rem]">
      <div
        className={cn(
          'relative mx-auto w-full max-w-[85.9375rem] overflow-hidden',
          'h-[16.25rem] xl:h-[21.75rem]',
        )}
      >
        <div className="pointer-events-none relative">
          <Orb
            className="relative z-30 mx-auto w-full"
            preserveAspectRatio="xMidYMin slice"
          />
          <Image
            alt="Glow"
            className="absolute inset-0 z-[10] size-full object-cover opacity-40 sm:opacity-10"
            height={500}
            quality={100}
            src="/Glow.png"
            width={500}
          />
        </div>
        <div className="absolute inset-0 z-30">
          <span
            className={cn(
              'mx-auto grid place-items-center px-4 text-center lg:px-0',
              'xl:mt-[11.375rem] xl:max-w-[56rem]',
              'md:mt-[10.5rem] md:max-w-[46rem]',
              'mt-[5.5rem] max-w-[90%] md:mt-[9.5rem]',
            )}
          >
            <h2
              className={cn(
                'text-primary font-display',
                'xl:text-[3rem] xl:leading-[3.375rem] xl:tracking-[-0.06rem]',
                'md:text-[2.5rem] md:leading-[2.8125rem] md:tracking-[-0.05rem]',
                'text-[2rem] leading-[2.25rem] tracking-[-0.04rem]',
              )}
            >
              Titan finds every way possible to lower fees and maximize your
              gains.
            </h2>
          </span>
        </div>
        <div className="from-bg-main absolute inset-x-0 bottom-0 z-20 h-[10rem] bg-gradient-to-t to-transparent" />
      </div>
    </div>
  );
};
