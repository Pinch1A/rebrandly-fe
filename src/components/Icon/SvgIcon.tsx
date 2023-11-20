import React from 'react';

export interface IconProps {
  className?: string;
  size?: number;
  viewBox?: string;
  children: React.ReactNode;
  color?: string;
  stroke?: string;
  strokeWidth?: number;
}

const DEFAULT_ICON_SIZE = 24;
const DEFAULT_ICON_VIEWBOX = '0 0 24 24';

export function SvgIcon({
  className,
  size,
  viewBox,
  children,
  color,
  stroke,
  strokeWidth
}: IconProps) {
  const iconSize = size || DEFAULT_ICON_SIZE;
  const iconViewBox = viewBox || DEFAULT_ICON_VIEWBOX;
  const iconColor = color || 'currentColor';
  const iconStroke = stroke || 'none';
  const iconStrokeWidth = strokeWidth || 1;

  return (
    <svg
      className={className}
      width={iconSize}
      height={iconSize}
      viewBox={iconViewBox}
      fill={iconColor}
      stroke={iconStroke}
      strokeWidth={iconStrokeWidth}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      {children}
    </svg>
  );
}
