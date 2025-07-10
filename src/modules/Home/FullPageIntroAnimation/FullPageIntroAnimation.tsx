'use client';

import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { useEffect } from 'react';

import { WebmComponent } from '@/common/components/WebmComponent';

export const FullPageIntroAnimation = () => {
  useBodyScrollLock();

  const [scope, animate] = useAnimate();

  const onVideoEnded = async (skipAnimation?: boolean) => {
    if (!skipAnimation) {
      await new Promise((resolve) => setTimeout(resolve, 400));

      animate(
        scope.current,
        {
          opacity: 0,
        },
        {
          stiffness: 150,
          damping: 10,
        },
      );

      await animate(
        '#titan-logo-video',
        {
          scale: 2.2,
        },
        {
          stiffness: 200,
          damping: 20,
        },
      );
    }

    // scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });

    // hide the video container
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      videoContainer.style.display = 'none';
    }

    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={scope}
          className="bg-bg-main fixed inset-0 z-100 grid size-full place-items-center"
          initial={{ opacity: 1 }}
        >
          <WebmComponent
            autoPlay
            className="mix-blend-lighten"
            height={60}
            hevcUrl="/logo-animation.mp4"
            id="titan-logo-video"
            webmUrl="/logo-animation.webm"
            width={283}
            onEnded={() => onVideoEnded(false)}
            onError={() => onVideoEnded(true)}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const useBodyScrollLock = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
};
