import { CustomIcon, CustomIconProps } from './CustomIcon';

export const ChevronRightIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon height="12" viewBox="0 0 8 12" width="8" {...props}>
      <path
        d="M1 0.666666L6.33333 5.99999L1 11.3333"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
    </CustomIcon>
  );
};
