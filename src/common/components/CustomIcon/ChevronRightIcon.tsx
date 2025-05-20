import { CustomIcon, CustomIconProps } from './CustomIcon';

export const ChevronRightIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      {...props}
    >
      <path
        d="M6.5 2.6665L11.8333 7.99983L6.5 13.3332"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
    </CustomIcon>
  );
};
