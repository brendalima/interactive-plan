import React, { useState, useEffect } from 'react';
import useImage from 'use-image';
import { Layer, Image } from 'react-konva';
import { useSelector } from 'react-redux';
import person from '../images/person.svg';

function Person() {
  const [image] = useImage(person);
  // const state = useSelector(({ floorPlan }) => floorPlan);
  // const { realWidth, realHeight } = state;
  const [personWidth, setPersonWidth] = useState(50);
  const [personThickness, setPersonThickness] = useState(30);

  const calculateScale = () => {
    const scaledWidth = (500 * personWidth) / 617;
    const scaledHeight = (500 * personThickness) / 610;
    setPersonThickness(scaledHeight);
    setPersonWidth(scaledWidth);
  }

  useEffect(() => {
    calculateScale();
  }, []);
  
  console.log(personWidth)

  return (
    <Layer>
      <Image image={image} width={personWidth} height={personThickness} draggable />
    </Layer>
  )
}

export default Person;