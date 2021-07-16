import React, { useState, useEffect, useRef } from 'react';
import useImage from 'use-image';
import { Layer, Image, Transformer } from 'react-konva';
import { useSelector } from 'react-redux';
import person from '../images/person.svg';

function Person() {
  const [image] = useImage(person);
  const state = useSelector(({ floorPlan }) => floorPlan);
  const { realWidth, realHeight, personWidthEntry, personThicknessEntry } = state;

  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    trRef.current.nodes([shapeRef.current]);
    trRef.current.getLayer().batchDraw();
  }, []);

  return (
    <Layer>
      <Image
        ref={shapeRef}
        image={image}
        width={ (500 * personWidthEntry) / realWidth }
        height={ (500 * personThicknessEntry) / realHeight }
        draggable 
      />
      <Transformer
        ref={trRef}
        resizeEnabled={false}
        />
    </Layer>
  )
}

export default Person;