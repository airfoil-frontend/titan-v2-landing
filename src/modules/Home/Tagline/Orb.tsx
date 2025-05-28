import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/common/functions/cn';

interface OrbProps extends ComponentPropsWithoutRef<'svg'> {}

export const Orb = ({ className, ...props }: OrbProps) => {
  return (
    <svg
      className={cn('', className)}
      fill="none"
      height="1275"
      viewBox="0 0 1375 1275"
      width="1375"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        height="1376"
        id="mask0_4108_477"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="1375"
        x="0"
        y="-101"
      >
        <circle
          cx="687.5"
          cy="587.45"
          fill="url(#paint0_linear_4108_477)"
          r="687.5"
        />
      </mask>
      <g mask="url(#mask0_4108_477)">
        <circle
          cx="687.5"
          cy="607.45"
          fill="url(#paint1_linear_4108_477)"
          fillOpacity="0.04"
          r="550"
        />
        <circle cx="687.5" cy="607.45" fill="#0C0B09" r="550" />
        <circle
          cx="687.5"
          cy="607.45"
          r="549.476"
          stroke="url(#paint2_linear_4108_477)"
          strokeOpacity="0.35"
          strokeWidth="1.04795"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="1200"
          id="filter0_f_4108_477"
          width="1200"
          x="87.5"
          y="-12.55"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur_4108_477"
            stdDeviation="25"
          />
        </filter>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_4108_477"
          x1="687.5"
          x2="687.5"
          y1="-100.05"
          y2="1274.95"
        >
          <stop stopColor="white" />
          <stop offset="0.237547" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_4108_477"
          x1="687.5"
          x2="687.5"
          y1="57.45"
          y2="1157.45"
        >
          <stop stopColor="#F2D364" />
          <stop offset="0.215681" stopColor="#0A0A0A" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_4108_477"
          x1="687.5"
          x2="687.5"
          y1="57.45"
          y2="1157.45"
        >
          <stop stopColor="#F2D364" />
          <stop offset="0.157637" stopColor="#F2D364" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
