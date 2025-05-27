'use client';

import Link from 'next/link';

import { Button } from '@/common/components/Button';
import { TitanIcon } from '@/common/components/CustomIcon';
import { ChevronRightIcon } from '@/common/components/CustomIcon/ChevronRightIcon';

import { HeaderItem } from './HeaderItem';
import { headerItems } from './headerItems';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  return (
    <header className="z-header bg-bg-main sticky top-0 flex w-full flex-col items-center justify-center border-b border-gray-900 sm:bg-transparent sm:backdrop-blur-[25px]">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <TitanIcon animate />
        </Link>
        <nav className="hidden h-[var(--header-height)] items-center gap-10 sm:flex">
          {headerItems.map(({ href, label, external }) => (
            <HeaderItem key={label} external={external} href={href}>
              {label}
            </HeaderItem>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 sm:ml-0">
          <Button iconRight={<ChevronRightIcon />} variant="secondary">
            Launch DApp
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
