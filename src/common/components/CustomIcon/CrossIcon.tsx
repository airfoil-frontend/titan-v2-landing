import { CustomIcon, CustomIconProps } from './CustomIcon';

export const CrossIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path
        d="M2.16675 2.16667L13.8334 13.8333M13.8334 2.16667L2.16675 13.8333"
        stroke="#FAFAF9"
        strokeLinecap="square"
        strokeWidth="1.66667"
      />
    </CustomIcon>
  );
};
