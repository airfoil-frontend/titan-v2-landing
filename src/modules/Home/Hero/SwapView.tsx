import { motion } from 'motion/react';
import Image from 'next/image';

export const SwapView = () => {
  return (
    <div className="relative w-full md:min-w-[27.5rem] lg:w-fit">
      <Image
        alt="blur-bg"
        className="pointer-events-none absolute inset-0 mx-auto origin-center scale-150 xl:mr-6"
        height={560}
        quality={100}
        src="/blur.png"
        width={530}
      />
      <div className="relative mx-auto w-full max-w-[35rem] overflow-hidden md:max-w-[36rem] lg:max-w-[27.5rem]">
        <Image
          alt="bg"
          className="w-full"
          height={560}
          quality={100}
          src="/bg.svg"
          width={530}
        />
        <div
          className="z-elevated absolute inset-0"
          style={{
            mask: 'url("/mask.svg")',
            maskSize: '100%',
            maskRepeat: 'no-repeat',
          }}
        >
          {/* Wrapper that is the full height of the parent */}
          <motion.div
            animate={{ translateY: '-125%' }}
            className="absolute inset-0 rotate-45"
            initial={{ translateY: '20%' }}
            style={{
              willChange: 'transform',
              originX: '50%',
            }}
            transition={{
              duration: 2.5,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0.5,
            }}
          >
            {/* Child that is only a small bar */}
            <div className="absolute right-0 bottom-0 h-[2.5rem] w-[150%] transform-gpu bg-[#D9D9D9] opacity-20 blur-sm" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
