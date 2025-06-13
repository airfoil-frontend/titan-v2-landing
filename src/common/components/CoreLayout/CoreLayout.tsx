import { PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

interface CoreLayoutProps {}

export const CoreLayout = ({
  children,
}: PropsWithChildren<CoreLayoutProps>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex min-h-[15rem] flex-1 flex-col [&>*]:flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
