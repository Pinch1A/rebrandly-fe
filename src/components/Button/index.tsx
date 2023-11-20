import React from 'react';
import cx from 'classnames';
import * as s from './styles';

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function Button({ label, className, onClick, ...props }: Props) {
  return (
    <button className={cx(s.button, className)} onClick={onClick} {...props}>
      {label}
    </button>
  );
}
