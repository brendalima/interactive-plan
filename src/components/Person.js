import React, { useEffect, useRef } from 'react';
import useImage from 'use-image';
import { Layer, Image, Transformer } from 'react-konva';
import { useSelector } from 'react-redux';
import person from '../images/person.svg';

function Person() {
  const [image] = useImage(person);
  const state = useSelector(({ floorPlan }) => floorPlan);
  const {
    realWidth,
    realHeight,
    personWidthEntry,
    personThicknessEntry,
    renderWidth,
    renderHeight
  } = state;

  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    trRef.current.nodes([shapeRef.current]);
    trRef.current.getLayer().batchDraw();
  }, []);

  console.log((renderWidth * personWidthEntry) / realWidth);

  return (
    <Layer>
      <Image
        ref={ shapeRef }
        image={ image }
        width={ (renderWidth * personWidthEntry) / realWidth }
        height={ (renderHeight * personThicknessEntry) / realHeight }
        draggable 
      />
      <Transformer
        ref={ trRef }
        resizeEnabled={ false }
        />
    </Layer>
  )
}

export default Person;