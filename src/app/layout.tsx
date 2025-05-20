import { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';

import { CoreLayout } from '@/common/components/CoreLayout';
import { geistMono, geistSans, recklessNeue } from '@/common/fonts';
import { cn } from '@/common/functions/cn';
import '@/common/styles/main.css';

export const viewport: Viewport = {
  themeColor: '#100e0a',
};

export const metadata: Metadata = {
  title: 'Titan | Home',
  // description: 'Titan description',
  // metadataBase: new URL('https://titan.com'),
  // openGraph: {
  //   title: 'Titan',
  //   description: 'Your app description',
  //   url: 'https://titan.com',
  //   siteName: 'Titan',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@titan',
  //   creator: '@titan',
  // },
};

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      className={cn(
        geistSans.variable,
        geistMono.variable,
        recklessNeue.variable,
        'scrollbar',
      )}
      lang="en"
    >
      <meta content="VAPI" name="apple-mobile-web-app-title" />
      <body className="bg-bg-main text-gray-50">
        <CoreLayout>{children}</CoreLayout>
      </body>
    </html>
  );
};

export default GlobalLayout;
