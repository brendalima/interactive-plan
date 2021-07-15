import React, { useState, useEffect } from 'react';
import useImage from 'use-image';
import { Layer, Image, Transformer } from 'react-konva';
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
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  useEffect(() => {
    calculateScale();
    trRef.current.nodes([shapeRef.current]);
    trRef.current.getLayer().batchDraw();
  }, []);
  
  console.log(personWidth)

  return (
    <Layer>
      <Image ref={shapeRef} image={image} width={personWidth} height={personThickness} draggable />
      <Transformer
          ref={trRef}
          resizeEnabled={false}
        />
    </Layer>
  )
}

export default Person;