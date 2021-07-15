import React from 'react';
import useImage from 'use-image';
import { Layer, Image } from 'react-konva';
import person from '../images/person.svg';

function Person() {
  const [image] = useImage(person);

  return (
    <Layer>
      <Image image={image} />
    </Layer>
  )
}

export default Person;