import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { useDispatch, ReactReduxContext, Provider } from 'react-redux';
import useImage from 'use-image';
import {setRealDimentions} from '../actions/floorPlan';
import plan from '../images/floorplan.png';
import Person from './Person';
import Furniture from './Furniture';

function FloorPlan() {
  const [floorplan] = useImage(plan);
  const [width, setWidth] = useState(1565);
  const [height, setHeight] = useState(1555);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [ratio, setRatio] = useState(width/height);
  const dispatch = useDispatch();

  useEffect (() => {
    window.addEventListener("resize", () => setWinWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    let RENDER_WIDTH = 500;
    if (winWidth < 500) {
      RENDER_WIDTH = 300;
    }
    const REAL_WIDTH = 617;
    const REAL_HEIGHT = 610;
    setRatio(width/height);
    setWidth(RENDER_WIDTH);
    setHeight(RENDER_WIDTH/ratio);
    dispatch(setRealDimentions(REAL_WIDTH, REAL_HEIGHT));
  }, [winWidth]);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Stage width={width} height={height}>
          <Provider store={store}>
            <Layer>
              <Image image={floorplan} width={width} height={height} />
            </Layer>
            <Person />
            <Furniture />
          </Provider>
        </Stage>
      )}
    </ReactReduxContext.Consumer>
  )
}

export default FloorPlan;