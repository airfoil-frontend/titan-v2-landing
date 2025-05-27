'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { useRef, useState } from 'react';

import { cn } from '@/common/functions/cn';

import { ProgressComparison } from '@/modules/Home/Features/BestExecution/ProgressComparison';

export const FeaturesSection = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // start when '' of target meets '' of container (body)
    // end when '' of target meets '' of container (body)
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value < 0.2222) {
      setActiveSection(1);
    } else if (value < 0.5555) {
      setActiveSection(2);
    } else {
      setActiveSection(3);
    }
  });

  return (
    <>
      <section className="mx-auto mb-[4rem] max-w-[1216px] px-4 md:mb-[6rem] md:px-6 lg:mb-0 lg:px-8">
        <div
          ref={sectionRef}
          className="justify-between gap-[4rem] lg:flex xl:gap-[6rem]"
        >
          <div className="flex flex-1 flex-col gap-[5rem] lg:gap-0">
            <div className="flex flex-col gap-10 pb-[2rem] lg:gap-0 xl:pb-[6rem]">
              <div className="w-full lg:h-100">
                <Feature
                  additionalItem={
                    <div className="text-primary flex items-center gap-2 text-base leading-6 font-light tracking-[-0.01rem] md:text-lg md:font-normal md:tracking-[-0.0112rem]">
                      <svg
                        fill="none"
                        height="23"
                        viewBox="0 0 22 23"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0003 2.79138C15.8097 2.79156 19.7083 6.691 19.7083 11.5004C19.7082 16.3096 15.8095 20.2082 11.0003 20.2084C6.19095 20.2084 2.29151 16.3097 2.29134 11.5004C2.29134 6.69089 6.19084 2.79138 11.0003 2.79138ZM13.2659 7.6283L9.52278 12.2035L7.79134 10.472L7.46809 10.7963L6.17122 12.0922L5.847 12.4164L9.72688 16.2963L10.0482 15.9047L15.3949 9.36951L15.6849 9.01501L15.3304 8.72498L13.9115 7.56384L13.557 7.2738L13.2659 7.6283Z"
                          fill="#F2D364"
                          stroke="#F2D364"
                          strokeWidth="0.916667"
                        />
                      </svg>
                      Wins 81% of the time over all competitors
                    </div>
                  }
                  description="An algorithm that outperforms the rest. Basis-point level precision."
                  logo={
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 16 17"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.58855 1.83337L1.58855 9.83337H5.17591L3.92224 15.6839L15.754 5.16671H11.178L13.178 1.83337H5.58855Z"
                        fill="#F2D364"
                      />
                    </svg>
                  }
                  secondaryDescription="13-15bp better than competitors."
                  title="Titan's Talos algorithm"
                />
              </div>
              <div className="lg:hidden">
                <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2.5">
                    <svg
                      fill="none"
                      height="2"
                      viewBox="0 0 24 2"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        stroke="#F2D364"
                        strokeWidth="2"
                        x2="24"
                        y1="1"
                        y2="1"
                      />
                    </svg>
                    <span className="font-mono text-base leading-4 font-medium">
                      Titan’s Talos
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg
                      fill="none"
                      height="2"
                      viewBox="0 0 24 2"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        stroke="#E7E6E4"
                        strokeWidth="2"
                        x2="24"
                        y1="1"
                        y2="1"
                      />
                    </svg>
                    <span className="font-mono text-base leading-4 font-medium">
                      Competitors
                    </span>
                  </div>
                </div>
                <div>
                  <svg
                    className="size-full"
                    fill="none"
                    height="284"
                    viewBox="0 0 561 284"
                    width="561"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 31H560"
                      stroke="#292824"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M0 75.4H560"
                      stroke="#292824"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M0 119.8H560"
                      stroke="#292824"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M0 164.2H560"
                      stroke="#292824"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M0 208.6H560"
                      stroke="#292824"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M0 253H560"
                      stroke="#292824"
                      strokeDasharray="2 2"
                    />
                    <mask
                      height="266"
                      id="mask0_4124_107"
                      maskUnits="userSpaceOnUse"
                      style={{ maskType: 'alpha' }}
                      width="640"
                      x="0"
                      y="9"
                    >
                      <rect
                        fill="url(#paint0_linear_4124_107)"
                        height="266"
                        width="640"
                        y="9"
                      />
                    </mask>
                    <g mask="url(#mask0_4124_107)">
                      <path
                        d="M0 275C64.8984 251.97 276.989 209.939 560 9"
                        stroke="#F2D364"
                      />
                      <path
                        d="M0 275C64.8984 259.675 276.989 231.708 560 98"
                        stroke="#E7E6E4"
                        strokeDasharray="4 4"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_4124_107"
                        x1="0"
                        x2="640"
                        y1="142"
                        y2="142"
                      >
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="0.15" stopColor="white" />
                        <stop offset="0.85" stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 pb-[2rem] lg:gap-0 xl:pb-[6rem]">
              <div className="w-full lg:h-100">
                <Feature
                  description="The lowest slippage across all Solana DEX aggregators. 800ms quote response times."
                  logo={
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 16 17"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8 5.16671C6.15905 5.16671 4.66666 6.65909 4.66666 8.50004C4.66666 10.341 6.15905 11.8334 8 11.8334C9.84094 11.8334 11.3333 10.341 11.3333 8.50004C11.3333 6.65909 9.84094 5.16671 8 5.16671ZM8 9.83337C8.73637 9.83337 9.33333 9.23642 9.33333 8.50004C9.33333 7.76366 8.73637 7.16671 8 7.16671C7.26362 7.16671 6.66666 7.76366 6.66666 8.50004C6.66666 9.23642 7.26362 9.83337 8 9.83337Z"
                        fill="#F2D364"
                        fillRule="evenodd"
                      />
                      <path
                        clipRule="evenodd"
                        d="M14.6667 8.50004C14.6667 12.1819 11.6819 15.1667 8 15.1667C4.3181 15.1667 1.33333 12.1819 1.33333 8.50004C1.33333 4.81814 4.3181 1.83337 8 1.83337C11.6819 1.83337 14.6667 4.81814 14.6667 8.50004ZM3.33333 8.50004C3.33333 5.92271 5.42267 3.83337 8 3.83337C10.5773 3.83337 12.6667 5.92271 12.6667 8.50004C12.6667 11.0774 10.5773 13.1667 8 13.1667C5.42267 13.1667 3.33333 11.0774 3.33333 8.50004Z"
                        fill="#F2D364"
                        fillRule="evenodd"
                      />
                    </svg>
                  }
                  secondaryDescription="30bp better than competitors."
                  title="Best execution"
                />
              </div>
              <div className="lg:hidden">
                <div className="border-b border-[rgba(39,_39,_42,_0.80)] py-4 font-mono text-sm font-medium tracking-[.0625rem] uppercase">
                  Quote update time
                </div>
                <div className="py-10">
                  <ProgressComparison
                    items={[
                      {
                        name: 'Titan',
                        value: 800,
                        maxValue: 5000,
                      },
                      {
                        name: 'Competitors',
                        value: 5000,
                        maxValue: 5000,
                      },
                    ]}
                  />
                </div>
                <div className="py-5 font-light tracking-[.0213rem] text-gray-400">
                  Tested with XXX as of 30 April 2025.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:gap-0">
              <div className="w-full lg:h-90">
                <Feature
                  description="An Auto mode without any hidden fees. Choose your broadcast method, speed, and swap."
                  logo={
                    <svg
                      fill="none"
                      height="17"
                      viewBox="0 0 16 17"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M11.3333 1.55713L14.2761 4.49994L11.3333 7.44275L10.3905 6.49994L11.7239 5.1666H3.33334V8.49994H2V3.83327H11.7239L10.3905 2.49994L11.3333 1.55713ZM14 8.49994V13.1666H4.27615L5.60948 14.4999L4.66667 15.4427L1.72386 12.4999L4.66667 9.55713L5.60948 10.4999L4.27615 11.8333H12.6667V8.49994H14Z"
                        fill="#F2D364"
                        fillRule="evenodd"
                      />
                    </svg>
                  }
                  title="Swap with no fees"
                />
              </div>
              <div className="lg:hidden">
                <SwapWithNoFees />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-[calc(var(--header-height)+20rem)] grid place-items-center">
              <div className="relative grid w-[28rem] place-items-center xl:w-[37.5rem]">
                <AnimatePresence initial={false} mode="popLayout">
                  {activeSection === 1 && (
                    <motion.div
                      key="1"
                      animate={{ opacity: 1 }}
                      className="py-8"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                    >
                      <div className="mb-6 flex items-center gap-8 xl:mb-8">
                        <div className="flex items-center gap-2.5">
                          <svg
                            fill="none"
                            height="2"
                            viewBox="0 0 24 2"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              stroke="#F2D364"
                              strokeWidth="2"
                              x2="24"
                              y1="1"
                              y2="1"
                            />
                          </svg>
                          <span className="font-mono text-base leading-4 font-medium">
                            Titan’s Talos
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <svg
                            fill="none"
                            height="2"
                            viewBox="0 0 24 2"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line
                              stroke="#E7E6E4"
                              strokeWidth="2"
                              x2="24"
                              y1="1"
                              y2="1"
                            />
                          </svg>
                          <span className="font-mono text-base leading-4 font-medium">
                            Competitors
                          </span>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-full"
                          fill="none"
                          height="284"
                          viewBox="0 0 561 284"
                          width="561"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 31H560"
                            stroke="#292824"
                            strokeDasharray="2 2"
                          />
                          <path
                            d="M0 75.4H560"
                            stroke="#292824"
                            strokeDasharray="2 2"
                          />
                          <path
                            d="M0 119.8H560"
                            stroke="#292824"
                            strokeDasharray="2 2"
                          />
                          <path
                            d="M0 164.2H560"
                            stroke="#292824"
                            strokeDasharray="2 2"
                          />
                          <path
                            d="M0 208.6H560"
                            stroke="#292824"
                            strokeDasharray="2 2"
                          />
                          <path
                            d="M0 253H560"
                            stroke="#292824"
                            strokeDasharray="2 2"
                          />
                          <mask
                            height="266"
                            id="mask0_4124_107"
                            maskUnits="userSpaceOnUse"
                            style={{ maskType: 'alpha' }}
                            width="640"
                            x="0"
                            y="9"
                          >
                            <rect
                              fill="url(#paint0_linear_4124_107)"
                              height="266"
                              width="640"
                              y="9"
                            />
                          </mask>
                          <g mask="url(#mask0_4124_107)">
                            <path
                              d="M0 275C64.8984 251.97 276.989 209.939 560 9"
                              stroke="#F2D364"
                            />
                            <path
                              d="M0 275C64.8984 259.675 276.989 231.708 560 98"
                              stroke="#E7E6E4"
                              strokeDasharray="4 4"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id="paint0_linear_4124_107"
                              x1="0"
                              x2="640"
                              y1="142"
                              y2="142"
                            >
                              <stop stopColor="white" stopOpacity="0" />
                              <stop offset="0.15" stopColor="white" />
                              <stop offset="0.85" stopColor="white" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </motion.div>
                  )}
                  {activeSection === 2 && (
                    <motion.div
                      key="2"
                      animate={{ opacity: 1 }}
                      className="w-full p-5 pt-[4.125rem]"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                    >
                      <div className="border-b border-[rgba(39,_39,_42,_0.80)] py-4 font-mono text-sm font-medium tracking-[.0625rem] uppercase">
                        Quote update time
                      </div>
                      <div className="py-10">
                        <ProgressComparison
                          items={[
                            {
                              name: 'Titan',
                              value: 800,
                              maxValue: 5000,
                            },
                            {
                              name: 'Competitors',
                              value: 5000,
                              maxValue: 5000,
                            },
                          ]}
                        />
                      </div>
                      <div className="py-5 font-light tracking-[.0213rem] text-gray-400">
                        Tested with XXX as of 30 April 2025.
                      </div>
                    </motion.div>
                  )}
                  {activeSection === 3 && (
                    <motion.div
                      key="3"
                      animate={{ opacity: 1 }}
                      className="w-full py-9"
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                    >
                      <SwapWithNoFees />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SwapWithNoFees = () => {
  const [feeMode, setFeeMode] = useState<'auto' | 'custom'>('auto');
  const [broadcastMode, setBroadcastMode] = useState<
    'Priority fee' | 'MEV Shield'
  >('Priority fee');
  const [speed, setSpeed] = useState<'Fast' | 'Faster' | 'Fastest'>('Fast');

  return (
    <div className="bg-bg-main relative rounded-t-2xl border border-b-0 border-[#262626] p-2 xl:p-3">
      <div
        className="pointer-events-none absolute -inset-x-[3px] bottom-0 z-20 h-[1.75rem]"
        style={{
          background: 'linear-gradient(0deg, #100e0a 29%, transparent 100%)',
        }}
      ></div>

      <div className="relative rounded-t-lg border border-b-0 border-[#292824]">
        <div
          className="pointer-events-none absolute -inset-x-[3px] bottom-0 z-20 h-[2.75rem]"
          style={{
            background: 'linear-gradient(0deg, #100e0a 29%, transparent 100%)',
          }}
        ></div>
        <div
          className="relative z-30 rounded-t-[inherit] p-2.5 xl:p-3"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #141310 0%, #100E0A 100%)',
          }}
        >
          <ul>
            <li className="flex justify-between gap-3 py-2">
              <div className="flex items-center gap-3">
                <svg
                  className="size-3 sm:size-4 xl:size-5"
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4124_495)">
                    <path
                      d="M16.6667 10.0002H18.3333M16.6667 10.0002C16.6667 8.78564 16.3419 7.64698 15.7745 6.66627M16.6667 10.0002C16.6667 11.2147 16.3419 12.3534 15.7744 13.3341M16.6667 10.0002H11.6667M15.7745 6.66627L17.2169 5.8335M15.7745 6.66627C15.1891 5.65462 14.3456 4.81106 13.3339 4.22571M15.7744 13.3341L17.2169 14.1669M15.7744 13.3341C15.1891 14.3457 14.3455 15.1893 13.3339 15.7746M13.3339 15.7746C12.3532 16.3421 11.2145 16.6668 10 16.6668M13.3339 15.7746L14.1667 17.217M10 16.6668C8.78549 16.6668 7.64684 16.3421 6.66614 15.7746M10 16.6668V18.3334M6.66614 15.7746L5.83333 17.2171M6.66614 15.7746C5.65446 15.1893 4.81089 14.3457 4.22554 13.3341M6.66614 15.7746L9.16654 11.4438M4.22554 13.3341C3.6581 12.3533 3.33333 11.2147 3.33333 10.0002M4.22554 13.3341L2.78312 14.1668M3.33333 10.0002C3.33333 8.78566 3.65809 7.64702 4.22551 6.66632M3.33333 10.0002L1.66669 10.0001M2.78312 5.83358L4.22551 6.66632M4.22551 6.66632C4.81085 5.65464 5.65443 4.81105 6.66611 4.2257M6.66611 4.2257C7.64681 3.65827 8.78548 3.3335 10 3.3335M6.66611 4.2257L5.83333 2.78328M6.66611 4.2257L9.16653 8.55655M10 3.3335V1.66675M10 3.3335C11.2145 3.3335 12.3532 3.65827 13.3339 4.22571M13.3339 4.22571L14.1667 2.78337M11.6667 10.0002C11.6667 10.9206 10.9205 11.6668 10 11.6668C9.69637 11.6668 9.41171 11.5856 9.16654 11.4438M11.6667 10.0002C11.6667 9.07969 10.9205 8.3335 10 8.3335C9.69637 8.3335 9.4117 8.41469 9.16653 8.55655M9.16653 8.55655C8.66844 8.84474 8.33333 9.38332 8.33333 10.0002C8.33333 10.617 8.66844 11.1556 9.16654 11.4438"
                      stroke="#F2D364"
                      strokeLinecap="square"
                      strokeWidth="1.66667"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4124_495">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-xs sm:text-base xl:text-lg xl:leading-[1.125rem]">
                  Fee mode
                </span>
              </div>
              <div className="bg-bg-main flex w-[10rem] rounded-full border border-gray-800 p-1 text-xs sm:w-[12rem] sm:text-sm xl:w-[14.375rem] xl:p-1.5 xl:text-base">
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    feeMode === 'auto' && 'text-gray-50',
                  )}
                  onClick={() => setFeeMode('auto')}
                >
                  <span className="z-elevated relative">Auto</span>
                  {feeMode === 'auto' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="fee-mode"
                    />
                  )}
                </button>
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    feeMode === 'custom' && 'text-gray-50',
                  )}
                  onClick={() => setFeeMode('custom')}
                >
                  <span className="z-elevated relative">Custom</span>
                  {feeMode === 'custom' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="fee-mode"
                    />
                  )}
                </button>
              </div>
            </li>
            <li className="flex justify-between gap-3 py-2">
              <div className="flex items-center gap-3">
                <svg
                  className="size-3 sm:size-4 xl:size-5"
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6666 4.79167L9.99998 2.5L3.33331 4.79167V9.92695C3.33331 14.0707 6.66665 15.8333 9.99998 17.6316C13.3333 15.8333 16.6666 14.0707 16.6666 9.92695V4.79167Z"
                    stroke="#F2D364"
                    strokeLinecap="square"
                    strokeWidth="1.66667"
                  />
                </svg>
                <span className="text-xs sm:text-base xl:text-lg xl:leading-[1.125rem]">
                  Broadcast mode
                </span>
              </div>
              <div className="bg-bg-main flex w-[10rem] rounded-full border border-gray-800 p-1 text-xs sm:w-[12rem] sm:text-sm xl:w-[14.375rem] xl:p-1.5 xl:text-base">
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    broadcastMode === 'Priority fee' && 'text-gray-50',
                  )}
                  onClick={() => setBroadcastMode('Priority fee')}
                >
                  <span className="z-elevated relative">Priority fee</span>
                  {broadcastMode === 'Priority fee' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="broadcast-mode"
                    />
                  )}
                </button>
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    broadcastMode === 'MEV Shield' && 'text-gray-50',
                  )}
                  onClick={() => setBroadcastMode('MEV Shield')}
                >
                  <span className="z-elevated relative">MEV Shield</span>
                  {broadcastMode === 'MEV Shield' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="broadcast-mode"
                    />
                  )}
                </button>
              </div>
            </li>
            <li className="flex justify-between gap-3 py-2">
              <div className="flex items-center gap-3">
                <svg
                  className="size-3 sm:size-4 xl:size-5"
                  fill="none"
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83333 10.8333H2.91667L5 6.66667H9.375M5.83333 10.8333L9.16667 14.1667M5.83333 10.8333L9.375 6.66667M9.16667 14.1667V17.0833L13.3333 15V10.625M9.16667 14.1667L13.3333 10.625M13.3333 10.625C15.8333 8.33333 17.5 5.83333 17.5 2.5C14.1667 2.5 11.6667 4.16667 9.375 6.66667M4.16667 17.5H2.5V15.8333C2.5 14.9129 3.24619 14.1667 4.16667 14.1667C5.08714 14.1667 5.83333 14.9129 5.83333 15.8333C5.83333 16.7538 5.08714 17.5 4.16667 17.5Z"
                    stroke="#F2D364"
                    strokeWidth="1.66667"
                  />
                </svg>

                <span className="text-xs sm:text-base xl:text-lg xl:leading-[1.125rem]">
                  Speed
                </span>
              </div>
              <div className="bg-bg-main flex w-[10rem] rounded-full border border-gray-800 p-1 text-xs sm:w-[12rem] sm:text-sm xl:w-[14.375rem] xl:p-1.5 xl:text-base">
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 px-2 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    speed === 'Fast' && 'text-gray-50',
                  )}
                  onClick={() => setSpeed('Fast')}
                >
                  <span className="z-elevated relative">Fast</span>
                  {speed === 'Fast' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="speed"
                    />
                  )}
                </button>
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 px-2 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    speed === 'Faster' && 'text-gray-50',
                  )}
                  onClick={() => setSpeed('Faster')}
                >
                  <span className="z-elevated relative">Faster</span>
                  {speed === 'Faster' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="speed"
                    />
                  )}
                </button>
                <button
                  className={cn(
                    'relative flex-1 rounded-full p-1 px-2 text-gray-500 transition-colors duration-300 sm:p-1.5 xl:p-2',
                    speed === 'Fastest' && 'text-gray-50',
                  )}
                  onClick={() => setSpeed('Fastest')}
                >
                  <span className="z-elevated relative">Fastest</span>
                  {speed === 'Fastest' && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-800"
                      layoutId="speed"
                    />
                  )}
                </button>
              </div>
            </li>
          </ul>
          <div className="relative z-30 p-2.5 xl:p-3">
            <div className="flex items-center justify-between gap-3 border-t border-gray-800 px-0 py-2 xl:px-3 xl:py-4">
              <span className="text-xs sm:text-base xl:text-lg">
                Transaction fees
              </span>
              <span className="flex flex-col gap-1.5 text-right font-mono text-xs sm:text-sm sm:leading-4 xl:gap-2 xl:text-lg xl:leading-[1.125rem]">
                <span>0.001 SOL</span>
                <span className="text-gray-500">~$0.15</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  secondaryDescription?: string;
  logo: React.ReactNode;
  additionalItem?: React.ReactNode;
}

const Feature = ({
  title,
  description,
  secondaryDescription,
  logo,
  additionalItem,
}: FeatureProps) => {
  return (
    <div className="max-w-[32.5rem] space-y-8">
      <FeatureLogo logo={logo} />

      <div className="space-y-4">
        <h2 className="font-display text-[2.25rem] leading-[2.8125rem] text-gray-50">
          {title}
        </h2>
        <p className="text-base leading-6 font-light tracking-[-0.01rem] md:text-lg md:font-normal md:tracking-[-0.0112rem]">
          {description}{' '}
          {secondaryDescription && (
            <span className="text-gray-400">{secondaryDescription}</span>
          )}
        </p>
      </div>
      {additionalItem && additionalItem}
    </div>
  );
};

const FeatureLogo = ({ logo }: { logo: React.ReactNode }) => {
  return (
    <div className="relative size-fit">
      <div className="absolute inset-0 grid place-items-center">{logo}</div>
      <svg
        className="border-primary/50 rounded-[.4375rem] border"
        fill="none"
        height="41"
        viewBox="0 0 40 41"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.35">
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="0.291667"
            y2="0.291667"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="1.95829"
            y2="1.95829"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="3.62504"
            y2="3.62504"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="5.29167"
            y2="5.29167"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="6.95829"
            y2="6.95829"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="8.62504"
            y2="8.62504"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="10.2917"
            y2="10.2917"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="11.9583"
            y2="11.9583"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="13.625"
            y2="13.625"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="15.2917"
            y2="15.2917"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="16.9583"
            y2="16.9583"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="18.625"
            y2="18.625"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="20.2917"
            y2="20.2917"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="21.9583"
            y2="21.9583"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="23.625"
            y2="23.625"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="25.2917"
            y2="25.2917"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="26.9583"
            y2="26.9583"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="28.625"
            y2="28.625"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="30.2917"
            y2="30.2917"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="31.9583"
            y2="31.9583"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="33.625"
            y2="33.625"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="35.2917"
            y2="35.2917"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="36.9583"
            y2="36.9583"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="38.625"
            y2="38.625"
          />
          <line
            opacity="0.2"
            stroke="#F2D364"
            strokeWidth="0.416667"
            x2="40"
            y1="40.2917"
            y2="40.2917"
          />
        </g>
      </svg>
    </div>
  );
};
