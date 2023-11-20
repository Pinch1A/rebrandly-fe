'use client';
import React from 'react';
import cx from 'classnames';
import * as s from './styles';
import { Info } from '@/types';

interface Props {
  info: Info;
  fetchPage: (page: number) => void;
}

export default function ListFooter({ info, fetchPage }: Props) {
  return (
    <div className="flex w-full py-4 items-center justify-center space-x-4">
      {info.prev && (
        <button className={cx(s.ctaButton, 'self-start')} onClick={() => fetchPage(info.prev)}>
          Load Prev Page
        </button>
      )}
      {info.next && (
        <button className={cx(s.ctaButton, 'self-end')} onClick={() => fetchPage(info.next)}>
          Load Next Page
        </button>
      )}
    </div>
  );
}
