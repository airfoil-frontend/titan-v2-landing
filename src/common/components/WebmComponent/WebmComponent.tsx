import * as motion from 'motion/react-client';
import { forwardRef } from 'react';

import { cn } from '@/common/functions/cn';

type MotionVideoProps = Parameters<typeof motion.video>[0];

export interface WebmComponentProps extends MotionVideoProps {
  webmUrl: string;
  hevcUrl?: string;
  fallbackUrl?: string;
}

export const WebmComponent = forwardRef<HTMLVideoElement, WebmComponentProps>(
  ({ webmUrl, hevcUrl, fallbackUrl, ...props }: WebmComponentProps, ref) => {
    return (
      <motion.video
        muted
        playsInline
        controls={false}
        poster={fallbackUrl}
        preload="auto"
        {...props}
        ref={ref}
        className={cn(props.className)}
      >
        <source src={hevcUrl} type="video/quicktime; codecs=hvc1" />
        <source src={webmUrl} type="video/webm" />
      </motion.video>
    );
  },
);

WebmComponent.displayName = 'WebmComponent';
