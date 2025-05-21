import { Portal } from '@radix-ui/react-portal';
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
        className="relative z-20 block h-4 w-4 sm:hidden"
        iconRight={
          <AnimatePresence initial={false} mode="popLayout">
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
        }
        variant="unstyled"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className="bg-bg-main fixed inset-x-0 top-[calc(var(--header-height)+1px)] border-b border-gray-900"
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
                      className={cn(
                        'transition-colors duration-300 ease-in-out',
                      )}
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
            {/* Backdrop */}
            <Portal>
              <motion.div
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black/50"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              />
            </Portal>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
