'use client';
import React from 'react';
import { Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useRickAndMortyApi from '@/hooks/useRickAndMortyApi';
import { LoadingElement } from '../Loading';
import CardItem from '../CardItem';
import Button from '../Button';

interface Props {
  id: string;
}

export default function SingleItem({ id }: Props) {
  const { data, loading, error } = useRickAndMortyApi(id);
  const router = useRouter();

  if (loading) {
    return <LoadingElement />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="flex">
        <CardItem character={data.results[0]} />
      </div>
      <div className="flex flex-col self-center max-w-20 mt-5">
        <Button label="Go Back" onClick={() => router.back()} />
      </div>
    </div>
  );
}
