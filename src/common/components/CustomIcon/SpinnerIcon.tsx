import { motion } from 'motion/react';

import {
  CustomIcon,
  type CustomIconProps,
} from '@/common/components/CustomIcon';

export const SpinnerIcon = ({
  animate = false,
  ...props
}: CustomIconProps & { animate?: boolean }) => {
  return (
    <CustomIcon
      height="24"
      name="Spinner Icon"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <motion.path
        animate={{ rotate: animate ? 360 : 0 }}
        d="M12.0003 3V6M12.0003 18V21M5.63634 5.63604L7.75766 7.75736M16.2429 16.2426L18.3643 18.364M3 12.0007H6M18 12.0007H21M5.63634 18.364L7.75766 16.2426M16.2429 7.75736L18.3643 5.63604"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </CustomIcon>
  );
};
