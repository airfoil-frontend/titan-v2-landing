'use client';

import { Button } from '@/common/components/Button';
import { ChevronRightIcon, DiscordIcon } from '@/common/components/CustomIcon';

import { BackgroundGlow } from '@/modules/Home/CTA/BackgroundGlow';

export const CTASection = () => {
  const smoothScrollToWaitlistForm = () => {
    const waitlistForm = document.getElementById('main');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
  };

  return (
    <section className="relative min-h-[570px] overflow-hidden lg:min-h-[631px]">
      <BackgroundGlow className="xs:top-16 pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 sm:top-10 md:top-16 xl:top-0" />
      <div className="xs:container px-14 pt-24">
        <h2 className="text-primary font-display text-center text-[2.5rem] leading-[2.5125rem] tracking-[-0.075rem] text-balance md:tracking-[-0.05rem] xl:text-[3.5rem] xl:leading-[3.9375rem] xl:tracking-[-0.14rem]">
          Public access open soon
        </h2>
        <p className="mt-5 text-center text-base leading-[1.25rem] font-light tracking-[-0.01rem] text-gray-400 md:text-lg md:leading-6 md:tracking-[-1%]">
          Priority access available now for Titan community members.
        </p>
        <div className="xs:flex-row mt-8 flex flex-col justify-center gap-x-3 gap-y-4">
          <Button
            iconRight={<ChevronRightIcon className="size-4" />}
            onClick={smoothScrollToWaitlistForm}
          >
            <span className="pr-0.5 pl-1.5 font-medium">Join waitlist</span>
          </Button>
          <Button
            iconLeft={<DiscordIcon className="size-4" />}
            variant="secondary"
          >
            <span className="pr-1.5 pl-0.5 font-medium">Join our Discord</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
