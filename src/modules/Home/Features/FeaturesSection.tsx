'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const FeaturesSection = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  // start when '' of target meets '' of container (body)
  // end when '' of target meets '' of container (body)

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ['start start', '0.3 start'],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ['start 0.3', 'end 0.3'],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: section3Ref,
    offset: ['start 0.3', 'end 0.3'],
  });

  const opacityRed = useTransform(scrollYProgress1, [1, 0.95], [0, 1]);
  const opacityGreen = useTransform(scrollYProgress2, [0, 0.05], [0, 1]);
  const opacityBlue = useTransform(scrollYProgress3, [0, 0.05], [0, 1]);

  return (
    <>
      <section className="container">
        <div className="hidden justify-between gap-[2rem] lg:flex xl:gap-[6rem]">
          <div className="flex flex-1 flex-col gap-[2rem] xl:gap-[6rem]">
            <div
              ref={section1Ref}
              className="h-100 w-full rounded-xl bg-gray-700 p-6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              placeat nulla consectetur totam repellendus asperiores ratione
              dolorem porro ea sit.
            </div>
            <div
              ref={section2Ref}
              className="h-100 w-full rounded-xl bg-gray-800 p-6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              placeat nulla consectetur totam repellendus asperiores ratione
              dolorem porro ea sit.
            </div>
            <div
              ref={section3Ref}
              className="h-100 w-full rounded-xl bg-gray-900"
            >
              section-3
            </div>
          </div>
          <div>
            <div className="sticky top-[calc(var(--header-height)+1rem)]">
              <div className="relative">
                <motion.div
                  className="grid size-[25rem] place-items-center rounded-xl bg-red-400 text-9xl"
                  style={{ opacity: opacityRed }}
                >
                  A
                </motion.div>
                <motion.div
                  className="absolute inset-0 z-10 grid size-[25rem] place-items-center rounded-xl bg-green-400 text-9xl"
                  style={{ opacity: opacityGreen }}
                >
                  B
                </motion.div>
                <motion.div
                  className="absolute inset-0 z-20 grid size-[25rem] place-items-center rounded-xl bg-blue-400 text-9xl"
                  style={{ opacity: opacityBlue }}
                >
                  C
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[40vh]" />
    </>
  );
};
