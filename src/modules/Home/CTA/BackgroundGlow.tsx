export const BackgroundGlow = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    height="631"
    viewBox="0 0 1512 631"
    width="1512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3693_1484)">
      <mask
        height="3439"
        id="mask0_3693_1484"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="3439"
        x="-963"
        y="14"
      >
        <circle
          cx="756.5"
          cy="1733.45"
          fill="url(#paint0_linear_3693_1484)"
          r="1718.75"
        />
        <circle
          cx="756.5"
          cy="1733.45"
          r="1718.25"
          stroke="url(#paint1_linear_3693_1484)"
          strokeOpacity="0.35"
        />
      </mask>
      <g mask="url(#mask0_3693_1484)">
        <g filter="url(#filter0_f_3693_1484)" opacity="0.1">
          <circle cx="756.5" cy="1733.45" fill="#F2D364" r="1375" />
          <circle
            cx="756.5"
            cy="1733.45"
            r="1374.5"
            stroke="url(#paint2_linear_3693_1484)"
            strokeOpacity="0.35"
          />
        </g>
        <circle
          cx="756.5"
          cy="1733.45"
          fill="url(#paint3_linear_3693_1484)"
          fillOpacity="0.04"
          r="1375"
        />
        <circle cx="756.5" cy="1733.45" fill="#0C0B09" r="1375" />
        <circle
          cx="756.5"
          cy="1733.45"
          r="1374.5"
          stroke="url(#paint4_linear_3693_1484)"
          strokeOpacity="0.35"
        />

        {/* Shimmer circles that follow the main circle paths */}
        <circle
          className="hidden md:block"
          cx="756.5"
          cy="1733.45"
          opacity="0.8"
          r="1374.5"
          stroke="url(#shimmerGradient)"
          strokeDasharray="8600"
          strokeDashoffset="0"
          strokeWidth="2"
        ></circle>
      </g>
    </g>
    <defs>
      {/* Shimmer gradient for the circle strokes */}
      <linearGradient id="shimmerGradient" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stopColor="rgba(242, 211, 100, 0)">
          <animate
            attributeName="offset"
            dur="3.5s"
            repeatCount="indefinite"
            values="0; 1"
          />
        </stop>
        <stop offset="10%" stopColor="rgba(242, 211, 100, 0.8)">
          <animate
            attributeName="offset"
            dur="3.5s"
            repeatCount="indefinite"
            values="0.1; 1.1"
          />
        </stop>
        <stop offset="20%" stopColor="rgba(242, 211, 100, 0)">
          <animate
            attributeName="offset"
            dur="3.5s"
            repeatCount="indefinite"
            values="0.2; 1.2"
          />
        </stop>
      </linearGradient>

      {/* Original gradients */}
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="3050"
        id="filter0_f_3693_1484"
        width="3050"
        x="-768.5"
        y="208.448"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          mode="normal"
          result="shape"
        />
        <feGaussianBlur
          result="effect1_foregroundBlur_3693_1484"
          stdDeviation="75"
        />
      </filter>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_3693_1484"
        x1="756.5"
        x2="756.5"
        y1="14.6982"
        y2="3452.2"
      >
        <stop stopColor="white" />
        <stop offset="0.172187" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear_3693_1484"
        x1="756.5"
        x2="756.5"
        y1="14.6982"
        y2="3452.2"
      >
        <stop stopColor="#F2D364" />
        <stop offset="0.157637" stopColor="#F2D364" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint2_linear_3693_1484"
        x1="756.5"
        x2="756.5"
        y1="358.448"
        y2="3108.45"
      >
        <stop stopColor="#F2D364" />
        <stop offset="0.157637" stopColor="#F2D364" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint3_linear_3693_1484"
        x1="756.5"
        x2="756.5"
        y1="358.448"
        y2="3108.45"
      >
        <stop stopColor="#F2D364" />
        <stop offset="0.0843752" stopColor="#0A0A0A" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint4_linear_3693_1484"
        x1="756.5"
        x2="756.5"
        y1="358.448"
        y2="3108.45"
      >
        <stop stopColor="#F2D364" />
        <stop offset="0.157637" stopColor="#F2D364" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_3693_1484">
        <rect fill="white" height="631" width="1512" />
      </clipPath>
    </defs>
  </svg>
);
