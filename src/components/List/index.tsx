'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Character } from '@/types';
import useRickAndMortyApi from '@/hooks/useRickAndMortyApi';
import Text from '../TextField';
import CardItem from '../CardItem';
import { LoadingList } from '../Loading';
import ListFooter from './Footer';
import ListHeader from './Header';
import * as s from './styles';

interface ItemsProps {
  items: Character[];
}

const ListWrapper = () => {
  const { data, loading, error, fetchPage } = useRickAndMortyApi();

  if (loading) {
    return <LoadingList />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const onClickHandler = (url: string) => {
    fetchPage(url);
  };

  return (
    <div>
      <Text size="3xl" gutter="lg">
        Rick and Morty Challenge
      </Text>
      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {data.results ? <ListItems items={data.results} /> : <NoResults />}
          </div>
          <div className="flex w-full py-4">
            <ListFooter info={data.info} fetchPage={onClickHandler} />
          </div>
        </>
      )}
    </div>
  );
};

const ListItems = ({ items }: ItemsProps) => {
  return items.map((character) => <CardItem key={character.id} character={character} withLink />);
};

const NoResults = () => {
  return <div className="flex flex-col justify-center">No Results</div>;
};

export default ListWrapper;
