import React from 'react';
import { Location } from '@/types';

interface Props {
  label: string;
  location: Location;
  color: string;
}

const colorVariants = {
  blue: 'border-blue-600/50 hover:border-blue-500',
  red: 'border-red-600/50 hover:border-red-500',
  gray: 'border-gray-600/50 hover:border-gray-500',
  teal: 'border-teal-600/50 hover:border-teal-500'
};

export default function LocationField({ label, location, color = 'red' }: Props) {
  const { name, dimension, residents, type } = location;
  const locationResidents = residents ? residents.length : 0;

  const textColor = () => {
    switch (color) {
      case 'blue':
        return 'text-blue-600 dark:text-blue-500';
      case 'red':
        return 'text-red-600 dark:text-red-500';
      case 'teal':
        return 'text-teal-600 dark:text-teal-500';
      default:
        return 'text-gray-600 dark:text-gray-500';
    }
  };

  return (
    <div className="flex flex-col space-y-1 my-2">
      <div className="flex ">
        <span className={`font-extralight ${textColor()}`}>{label}:</span>
      </div>
      <div className={`flex flex-col border ${colorVariants[color]} rounded-lg p-2`}>
        <RowItem label="Name" value={name} />
        <RowItem label="Type" value={type} />
        <RowItem label="Dimension" value={dimension} />
        <RowItem label="Residents" value={locationResidents} />
      </div>
    </div>
  );
}

const RowItem = ({ label, value }) => {
  return (
    <div className="flex items-center align-middle justify-start text-sm">
      <div className="font-semibold ">{label}:</div>
      <div className="h-5 self-center text-gray-600 dark:text-gray-500 ml-2">{value}</div>
    </div>
  );
};
