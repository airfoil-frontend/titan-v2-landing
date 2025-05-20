import localFont from 'next/font/local';

export const recklessNeue = localFont({
  src: [
    {
      path: './RecklessNeueTRIAL-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './RecklessNeueTRIAL-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './RecklessNeueTRIAL-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './RecklessNeueTRIAL-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './RecklessNeueTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './RecklessNeueTRIAL-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  preload: false,
});
