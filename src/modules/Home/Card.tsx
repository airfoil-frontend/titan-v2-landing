'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="w-full overflow-hidden px-4">
      <div className="relative mx-auto h-[350px] w-full max-w-[440px] rounded-[.875rem]">
        <div className="relative flex h-full w-full flex-col rounded-[inherit]">
          {/* Inner content */}
          <Image
            alt="bg"
            className="absolute inset-0"
            height={350}
            src="/bg.svg"
            width={440}
          />
        </div>

        <div className="rounded-[inherit]">
          <div
            className="z-elevated absolute inset-0"
            style={{
              mask: 'url("/mask.svg")',
              maskSize: '100%',
              maskRepeat: 'no-repeat',
            }}
          >
            <motion.div
              animate={{ y: -560 }}
              className="absolute right-16 bottom-20 h-[2.5rem] w-[33.75rem] rotate-45 bg-[#D9D9D9] opacity-60 blur-[.625rem]"
              initial={{ y: 50 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0.1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
