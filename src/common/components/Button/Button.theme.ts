import { tv, type VariantProps } from 'tailwind-variants';

export const buttonTheme = tv({
  base: [
    'flex',
    'leading-none',
    'text-center',
    'justify-center',
    'items-center',
    'font-medium',
    'rounded-full',
    'focus-ring',
    'transition-all',
    'duration-300',
    'active:scale-95',
  ],
  variants: {
    variant: {
      primary: ['bg-white', 'text-gray-950', 'hover:bg-gray-300'],
      secondary: [
        'bg-gray-800',
        'border border-gray-700',
        'text-gray-50',
        'hover:bg-gray-900',
        'focus-ring-secondary',
      ],
      unstyled: ['bg-transparent', 'border-none', 'focus-ring-none'],
    },
    size: {
      md: ['px-3 py-2', 'gap-1.5', 'text-xs leading-5'],
    },
    disable: {
      true: ['cursor-not-allowed', 'opacity-50'],
    },
    iconOnly: {
      true: ['px-0 py-0', 'w-[var(--height-value)]'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonTheme>;
