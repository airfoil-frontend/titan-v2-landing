import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/common/functions/cn';

interface HeaderItemProps {
  href: string;
  external: boolean;
  children: React.ReactNode;
}

export const HeaderItem = ({ href, external, children }: HeaderItemProps) => {
  const externalLinkProps = {
    rel: 'noopener noreferrer',
    target: '_blank',
  };

  const isActive = usePathname() === href;

  return (
    <Link
      className={cn(
        'focus-ring-secondary group hover:text-primary px-1.5 py-5.5 text-sm',
        isActive ? 'text-primary' : 'text-gray-400',
      )}
      href={href}
      {...(external ? externalLinkProps : {})}
    >
      <span
        className={cn(
          'after:bg-primary relative hidden py-[inherit] after:absolute after:inset-x-0 after:-bottom-[1px] after:h-px after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out sm:block',
          isActive
            ? 'after:opacity-80'
            : 'after:opacity-0 group-hover:after:opacity-30',
        )}
      >
        {children}
      </span>
    </Link>
  );
};
