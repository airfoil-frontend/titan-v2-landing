import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { ChevronRightIcon, SpinnerIcon } from '@/common/components/CustomIcon';
import { cn } from '@/common/functions/cn';

export const JoinWaitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <form
      className="mt-12 flex max-w-[30rem] items-center gap-x-2 rounded-full border border-gray-800 bg-gray-900 p-1.5 transition-colors duration-200 focus-within:border-gray-700"
      onSubmit={handleSubmit}
    >
      <input
        className={cn(
          'caret-primary flex-1 py-1 pl-3.5 font-light text-gray-50 placeholder:text-gray-400 focus-visible:outline-none md:py-2 md:text-sm',
          submitted && 'text-primary',
        )}
        disabled={isSubmitting || submitted}
        placeholder="Enter your email address"
        type="email"
        value={submitted ? 'You’ve successfully joined the waitlist!' : email}
        onChange={handleChange}
      />
      <motion.button
        className={cn(
          'relative z-10 flex h-[2.25rem] items-center rounded-full text-sm font-medium text-gray-950 focus-visible:outline-none',
          submitted ? 'bg-primary text-gray-950' : 'bg-gray-50 px-3 py-2',
        )}
        disabled={isSubmitting || submitted}
        type="submit"
        whileTap={{
          scale: 0.97,
        }}
      >
        {submitted ? (
          <span className="grid h-full w-[2.25rem] place-items-center">
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.83334 10.0625L6.00001 13.5L14.1667 2.5"
                stroke="#0C0B09"
                strokeLinecap="square"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        ) : (
          <>
            <span className="px-1.5">
              {isSubmitting ? 'Processing...' : 'Join waitlist'}
            </span>
            <span className="relative">
              <AnimatePresence initial={false} mode="popLayout">
                {isSubmitting ? (
                  <motion.div
                    key="spinner"
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  >
                    <SpinnerIcon animate className="size-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="chevron"
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  >
                    <ChevronRightIcon className="size-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </>
        )}
      </motion.button>
    </form>
  );
};
