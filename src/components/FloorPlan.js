import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { useDispatch } from 'react-redux';
import useImage from 'use-image';
import {setRealDimentions} from '../actions/floorPlan';
import plan from '../images/floorplan.png';
import Person from '../components/Person';

function FloorPlan() {
  const [floorplan] = useImage(plan);
  const [width, setWidth] = useState(1565);
  const [height, setHeight] = useState(1555);
  const [ratio, setRatio] = useState(width/height);
  const dispatch = useDispatch();

  useEffect (() => {
    const RENDER_WIDTH = 500;
    const REAL_WIDTH = 617;
    const REAL_HEIGHT = 610;
    setRatio(width/height);
    setWidth(RENDER_WIDTH);
    setHeight(RENDER_WIDTH/ratio);
    dispatch(setRealDimentions(REAL_WIDTH, REAL_HEIGHT));
  }, []);

  return (
    <div>
      <Stage width={width} height={height}>
        <Layer>
          <Image image={floorplan} width={width} height={height} />
        </Layer>
        <Person />
      </Stage>
    </div>
  )
}

export default FloorPlan;