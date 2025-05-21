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
    icon: <DiscordIcon />,
  },
  {
    name: 'X',
    // TODO: add x link
    href: '',
    icon: <XIcon />,
  },
  {
    name: 'Telegram',
    // TODO: add telegram link
    href: '',
    icon: <TelegramIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-900 bg-[#0C0B09]">
      <div className="mx-auto flex max-w-screen-xl justify-between px-4 pt-6 pb-24 sm:px-6 sm:pt-4 lg:px-8">
        <span className="text-center text-sm font-light text-gray-500">
          © 2025 Titan. All rights reserved.
        </span>
        <div className="flex gap-6">
          {socials.map(({ name, href, icon }) => (
            <Link
              key={name}
              className="text-gray-400 transition-colors hover:text-gray-300"
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
