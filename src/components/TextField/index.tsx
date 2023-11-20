'use client';
import React from 'react';
import cx from 'classnames';

type Gutter = 'xs' | 'sm' | 'md' | 'lg';
type Size = 'xs' | 'sm' | 'md' | 'xl' | '2xl' | '3xl' | '4xl';

interface Props {
  gutter?: Gutter;
  color?: string;
  size?: Size;
  text: React.ReactNode | string;
}

const gutterToPadding = (gutter) => {
  switch (gutter) {
    case 'xs':
      return 'py-2';
    case 'sm':
      return 'py-4';
    case 'md':
      return 'py-6';
    case 'lg':
      return 'py-12';
    default:
      return 'py-4';
  }
};

const getColors = (color) => {
  switch (color) {
    case 'white':
      return 'bg-white text-black';
    case 'black':
      return 'bg-black text-white';
    default:
      return 'bg-transparent';
  }
};

const getSize = (size) => {
  switch (size) {
    case 'xs':
      return 'text-xs';
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-md';
    case 'xl':
      return 'text-xl md:text-md lg:text-xl';
    case '2xl':
      return 'text-2xl md:text-xl lg:text-2xl';
    case '3xl':
      return 'text-3xl md:text-xl lg:text-3xl';
    case '4xl':
      return 'text-4xl md:text-2xl lg:text-4xl';
    default:
      return 'text-sm';
  }
};

export default function TextField({ gutter, size, color, children }: Props) {
  return (
    <div className={cx(getColors(color), gutterToPadding(gutter), getSize(size))}>{children}</div>
  );
}
