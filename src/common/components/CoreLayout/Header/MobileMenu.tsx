import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Button } from '@/common/components/Button';
import { headerItems } from '@/common/components/CoreLayout/Header/headerItems';
import { CrossIcon, MobileMenuIcon } from '@/common/components/CustomIcon';
import { cn } from '@/common/functions/cn';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const ref = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useOnClickOutside([ref, buttonRef] as RefObject<HTMLElement>[], closeMenu);

  return (
    <div>
      <Button
        ref={buttonRef}
        aria-label="Toggle menu"
        className="z-20 block h-4 w-4 sm:hidden"
        iconRight={
          <motion.span>
            <AnimatePresence initial={false} mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="cross"
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CrossIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MobileMenuIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.span>
        }
        variant="unstyled"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="bg-base-bg-main/90 fixed inset-x-0 top-[var(--header-height)] backdrop-blur-sm"
            exit={{ opacity: 0, transition: { delay: 0 } }}
            initial={{ opacity: 0 }}
            transition={{
              opacity: {
                delay: 0.05,
              },
            }}
          >
            <motion.ul
              ref={ref}
              animate={{ y: 0 }}
              className="leading-4 font-light tracking-[.01rem]"
              exit={{ transition: { delay: 0 } }}
              initial={{ y: -100 }}
              transition={{
                y: {
                  delay: -0.15,
                  type: 'spring',
                  stiffness: 200,
                  damping: 22,
                },
              }}
            >
              {headerItems.map((link) => {
                return (
                  <li
                    key={link.href}
                    className={cn('transition-colors duration-300 ease-in-out')}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <Link
                      className="block p-4"
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
