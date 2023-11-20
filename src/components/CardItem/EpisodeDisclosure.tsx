import React from 'react';
import { Episode } from '@/types';
import { Number } from '@/components/Icon';
import * as s from './styles';

interface Props {
  episodes: Episode[];
  handleFlip: () => void;
}
export default function EpisodeDisclosure({ episodes, handleFlip }: Props) {
  return (
    <div className="flex space-x-1">
      <Number
        className={s.icon}
        size={100}
        viewBox="0 0 16 16"
        color="black"
        stroke="black"
        strokeWidth={2}
      />
      <button className="flex self-center align-middle focus:outline-none w-full md:w-auto" onClick={handleFlip}>
        <span className={s.iconLabel}>Episodes</span>
        <div className="w-6 md:w-10 border rounded-xl text-xs md:text-sm px-1 text-white ml-2 hover:text-slate-800 hover:bg-white hover:ring hover:ring-offset-1">
          {episodes.length}
        </div>
      </button>
    </div>
  );
}


