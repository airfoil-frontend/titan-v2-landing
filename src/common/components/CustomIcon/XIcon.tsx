import { CustomIcon, CustomIconProps } from './CustomIcon';

export const XIcon = (props: CustomIconProps) => {
  return (
    <CustomIcon height="20" viewBox="0 0 20 20" width="20" {...props}>
      <g clipPath="url(#clip0_3693_1502)">
        <path
          d="M15.7508 0.960938H18.8175L12.1175 8.61927L20 19.0384H13.8283L8.995 12.7184L3.46333 19.0384H0.395L7.56167 10.8468L0 0.961771H6.32833L10.6975 6.73844L15.7508 0.960938ZM14.675 17.2034H16.3742L5.405 2.7001H3.58167L14.675 17.2034Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3693_1502">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </CustomIcon>
  );
};
