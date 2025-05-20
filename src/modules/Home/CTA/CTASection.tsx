'use client';

import { Button } from '@/common/components/Button';
import { ChevronRightIcon, DiscordIcon } from '@/common/components/CustomIcon';

import { BackgroundGlow } from '@/modules/Home/CTA/BackgroundGlow';

export const CTASection = () => {
  return (
    <section className="relative min-h-[570px] overflow-hidden lg:min-h-[631px]">
      <BackgroundGlow className="xs:top-24 absolute top-28 left-1/2 -translate-x-1/2 sm:top-20 md:top-16 lg:top-8 xl:top-0" />
      <div className="xs:container px-14 pt-24">
        <h2 className="text-primary font-display text-center text-5xl tracking-[-0.14rem]">
          Public access open soon
        </h2>
        <p className="mt-4 text-center text-lg font-light tracking-[-0.0112rem] text-gray-400">
          Priority access available now for Titan community members.
        </p>
        <div className="xs:flex-row mt-8 flex flex-col justify-center gap-x-3 gap-y-4">
          <Button iconRight={<ChevronRightIcon />}>Join waitlist</Button>
          <Button iconLeft={<DiscordIcon />} variant="secondary">
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  );
};
