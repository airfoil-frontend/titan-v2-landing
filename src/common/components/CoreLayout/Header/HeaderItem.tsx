import Link from 'next/link';

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

  return (
    <Link
      className={
        'focus-ring-secondary group hover:text-primary px-1.5 py-5.5 text-xs'
      }
      href={href}
      {...(external ? externalLinkProps : {})}
    >
      <span className="after:bg-primary relative hidden py-[inherit] after:absolute after:inset-x-0 after:-bottom-[.1875rem] after:h-px after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out group-hover:after:opacity-30 sm:block">
        {children}
      </span>
    </Link>
  );
};
