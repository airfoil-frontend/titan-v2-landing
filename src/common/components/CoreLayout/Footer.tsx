import Link from 'next/link';

import {
  DiscordIcon,
  TelegramIcon,
  XIcon,
} from '@/common/components/CustomIcon';

const socials = [
  {
    name: 'Discord',
    // TODO: add discord link
    href: '',
    icon: <DiscordIcon className="size-6" />,
  },
  {
    name: 'X',
    // TODO: add x link
    href: '',
    icon: <XIcon className="size-5" />,
  },
  {
    name: 'Telegram',
    // TODO: add telegram link
    href: '',
    icon: <TelegramIcon className="size-6" />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-900 bg-[#0C0B09]">
      <div className="mx-auto flex max-w-screen-xl justify-between px-4 pt-6 pb-24 sm:px-6 sm:pt-4.5 lg:px-8">
        <span className="text-center text-sm font-light text-gray-500">
          © {new Date().getFullYear()} Titan. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {socials.map(({ name, href, icon }) => (
            <Link
              key={name}
              className="active:text-primary text-gray-400 transition-all duration-300 hover:text-gray-300 active:scale-90"
              href={href}
              target="_blank"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
