import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-full">
      <div className="flex flex-col items-center justify-center my-auto h-full py-2">
        <h1 className="text-6xl mb-12 font-bold text-center text-blue-500">
          Welcome to <br />
          Rick and Morty App
        </h1>
        <Link
          className="px-6 py-3 text-orange-500 shadow-md text-xl rounded-lg bg-white focus:ring focus:ring-outline-2 focus:bg-orange-300 "
          href="/characters"
        >
          Go To Characters
        </Link>
      </div>
    </main>
  );
}
