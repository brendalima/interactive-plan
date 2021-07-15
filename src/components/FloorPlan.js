import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import plan from '../images/floorplan.png';
import useImage from 'use-image';

function FloorPlan() {
  const [image] = useImage(plan);
  const [width, setWidth] = useState(1565);
  const [height, setHeight] = useState(1555);
  const [ratio, setRatio] = useState(width/height);

  useEffect (() => {
    setRatio(width/height);
    console.log(ratio);
    setWidth(500);
    setHeight(500/ratio);
  }, [])

  return (
    <div>
      <Stage width={width} height={height}>
        <Layer>
          <Image image={image} width={width} height={height} />
        </Layer>
      </Stage>
    </div>
  )
}

export default FloorPlan;