import React from 'react';
import SingleItem from '../../../components/SingleItem';

interface Props {
  id: string;
}
export default function Page({ params }: { params: Props }) {
  return <SingleItem id={params.id} />;
}
