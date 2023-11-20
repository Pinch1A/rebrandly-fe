import React from 'react';
import { IconProps, SvgIcon } from './SvgIcon';

export function Specie(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="3" r="1" />
      <path d="M16 21L12 13M12 13V7M12 13L8 21M12 7L18 9M12 7L6 9" />
    </SvgIcon>
  );
}
