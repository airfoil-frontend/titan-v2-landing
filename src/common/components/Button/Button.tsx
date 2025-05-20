'use client';

import Link from 'next/link';
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
  type Ref,
  useCallback,
} from 'react';

import { buttonTheme, type ButtonVariants } from './Button.theme';

interface ButtonBaseProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  ref?: Ref<HTMLAnchorElement> | Ref<HTMLButtonElement>;
}

export interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  as?: 'a';
  external?: boolean;
  href: string;
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  as?: 'button';
}

// Discriminated union based on "as" prop
export type ButtonOrLinkProps = (ButtonLinkProps | ButtonProps) &
  ButtonBaseProps &
  Omit<ButtonVariants, 'hasIcon' | 'iconOnly' | 'disable'>;

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonOrLinkProps
>(
  (
    { children, iconLeft, iconRight, variant, size, className, ...props },
    ref,
  ) => {
    // Conditionally render between <NextLink>, <a> or <button> depending on props
    // useCallback to prevent unnecessary re-rendering
    const Component = useCallback(
      ({ children: _children, ..._props }: ButtonOrLinkProps) => {
        if (_props.as === 'a') {
          const {
            external,
            href,
            as: _as,
            ...baseLinkProps
          } = _props as ButtonLinkProps;

          // External link
          if (external) {
            const externalLinkProps = {
              target: '_blank',
              rel: 'noopener',
              href,
              ...baseLinkProps,
            };

            return (
              <a ref={ref as Ref<HTMLAnchorElement>} {...externalLinkProps}>
                {_children}
              </a>
            );
          }

          return (
            <Link
              ref={ref as Ref<HTMLAnchorElement>}
              {...baseLinkProps}
              href={href}
            >
              {_children}
            </Link>
          );
        } else {
          const { ...buttonProps } = _props as ButtonProps;

          return (
            <button ref={ref as Ref<HTMLButtonElement>} {...buttonProps}>
              {_children}
            </button>
          );
        }
      },
      [ref],
    );

    // throw error to pass aria-label if button is icon only
    if (typeof children === 'undefined' && !props['aria-label']) {
      throw new Error(
        'Button must have a label if it is icon only. Please add an aria-label prop.',
      );
    }

    const isDisabled = 'disabled' in props && props.disabled;

    const classNames = buttonTheme({
      variant,
      size,
      ...(isDisabled && { disable: isDisabled }),
      className: className,
      iconOnly: (!!iconLeft || !!iconRight) && !children,
    });

    return (
      <Component
        className={classNames}
        tabIndex={isDisabled ? -1 : 0} // FOR safari focus
        {...props}
        // Only pass disabled if it's a button element
        {...(props.as !== 'a' && { disabled: isDisabled })}
      >
        {iconLeft}
        {children}
        {iconRight}
      </Component>
    );
  },
);

Button.displayName = 'Button';
