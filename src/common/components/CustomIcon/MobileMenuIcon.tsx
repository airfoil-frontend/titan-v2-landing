import { CustomIcon, CustomIconProps } from './CustomIcon';

export const MobileMenuIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon height="10" viewBox="0 0 18 10" width="18" {...props}>
      <path
        d="M1.5 0.833332H16.5M1.5 9.16667H16.5"
        stroke="#FAFAF9"
        strokeLinecap="square"
        strokeWidth="1.66667"
      />
    </CustomIcon>
  );
};
