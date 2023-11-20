'use client';

export default function Error({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-600 border-2 border-red-800 rounded-xl">
      <div className="text-2xl">Error</div>
      <div className="text-xl">{message}</div>
    </div>
  );
}
