'use client';
import React from 'react';
import { LoadingElement } from './index';

export function LoadingList({ n = 10 }) {
  return (
    <div className="mt-44 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {Array.from({ length: n }, (_, index) => (
        <LoadingElement key={index} />
      ))}
    </div>
  );
}
