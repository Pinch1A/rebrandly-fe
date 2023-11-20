'use client';
import ReactFlipCard from 'reactjs-flip-card';
import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { Character } from '@/types';
import Text from '@/components/TextField';
import { Check, Gender, Specie } from '@/components/Icon';
import LocationField from './LocationField';
import EpisodeDisclosure from './EpisodeDisclosure';
import * as s from './styles';

interface Props {
  character: Character;
  withLink?: boolean;
}

export default function CardItem({ character, withLink = false }: Props) {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <ReactFlipCard
      frontComponent={
        <FrontCard character={character} withLink={withLink} handleFlip={handleFlip} />
      }
      backComponent={<BackCard character={character} handleFlip={handleFlip} />}
      flipDirection="horizontal"
      flipSpeedBackToFront={0.5}
      flipSpeedFrontToBack={0.5}
      containerCss={s.cardContainer}
      frontCss={s.frontCss}
      backCss={s.backCss}
      flipTrigger="disabled"
      flipByProp={flip}
    />
  );
}

const FrontCard = ({ character, withLink, handleFlip }: Props) => {
  const { id, name, image, gender, location, episode, origin, species, status, type } = character;

  const statusColor = () => {
    switch (status) {
      case 'Alive':
        return 'text-green-600 dark:text-green-500';
      case 'Dead':
        return 'text-red-600 dark:text-red-500';
      default:
        return 'text-gray-600 dark:text-gray-500';
    }
  };

  return (
    <figure className={cx(s.card, 'w-full')}>
      <div className="flex w-full text-2xl font-semibold mb-2">
        <p className={cx(s.cardName, 'w-4/5 overflow-hidden')}>
          {withLink ? <Link href={`/characters/${id}`}>{name}</Link> : <span>{name}</span>}
        </p>
      </div>
      <div className={s.imageContainer}>
        <div className="flex min-w-12 min-h-12 mb-4 sm:mb-0">
          <img className="rounded-xl" src={image} alt={name} />
        </div>
        <div className={s.container}>
          <blockquote>
            <div className={s.statuses}>
              <div className={s.statusItem}>
                <Check className={cx(statusColor(), s.icon)} />
                <span className={s.iconLabel}>{status}</span>
              </div>
              <div className={s.statusItem}>
                <Gender className={s.icon} size={100} viewBox="0 0 512 512" color="black" />
                <span className={s.iconLabel}>{gender}</span>
              </div>
              <div className={s.statusItem}>
                <Specie
                  className={s.icon}
                  size={100}
                  viewBox="0 0 24 24"
                  color="white"
                  stroke="white"
                  strokeWidth={2}
                />
                <span className={s.iconLabel}>{species}</span>
              </div>
              {episode && <EpisodeDisclosure episodes={episode} handleFlip={handleFlip} />}
            </div>
          </blockquote>
        </div>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <LocationField label="Origin" location={origin} color="gray" />
        <LocationField label="Location" location={location} color="teal" />
      </div>
    </figure>
  );
};

const BackCard = ({ character, handleFlip }: Props) => {
  const { episode } = character;

  return (
    <div className={cx(s.card, s.backCard)}>
      <div className="flex justify-between">
        <Text gutter="sm" size="xl">
          Episodes
        </Text>
        <button
          className="text-gray-600 dark:text-gray-500 hover:text-gray-300 ml-2 leading-normal"
          onClick={handleFlip}
        >
          X
        </button>
      </div>
      <div className={cx('flex flex-wrap', s.scrollContainer)}>
        <ul className="list-disc">
          {episode.map((item) => (
            <li
              key={`${item.id}-${item.episode}`}
              className="text-sm text-gray-600 dark:text-gray-500 hover:text-gray-300 ml-2"
            >
              {item.name} ({item.episode})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
