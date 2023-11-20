import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function CharactersLayout({ children }: Props) {
  return <section className="p-6 bg-gray-600 h-screen">{children}</section>;
}
