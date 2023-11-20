'use client';
import React from 'react';

export default function ListHeader({ count, pages }) {
  return (
    <div className="flex space-x-4 px-3 py-2 my-10 rounded-md border-4 bg-gray-400 font-bold text-blue-500 border-blue-500">
      <p>Count: {count}</p>
      <p>Pages: {pages}</p>
    </div>
  );
}
