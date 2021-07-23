import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { useDispatch, ReactReduxContext, Provider } from 'react-redux';
import useImage from 'use-image';
import { setRealDimentions, setRenderDimentions } from '../actions/floorPlan';
import plan from '../images/floorplan.png';
import Person from './Person';
import Furniture from './Furniture';
import { data } from '../aux/data';  

function FloorPlan() {
  const [floorplan] = useImage(plan);
  const [width, setWidth] = useState(data.width);
  const [height, setHeight] = useState(data.height);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [ratio, setRatio] = useState(width/height);
  const dispatch = useDispatch();

  useEffect (() => {
    window.addEventListener(
      "resize", () => setWinWidth(window.innerWidth)
    );
  }, []);
  
  useEffect(() => {
    const WIDTH_LARGE = 500;
    const WIDTH_SMALL = 300;
    let renderWidth = WIDTH_LARGE;
    if (winWidth < WIDTH_LARGE) {
      renderWidth = WIDTH_SMALL;
    }
    setRatio(width/height);
    setWidth(renderWidth);
    setHeight(renderWidth/ratio);
    const { realWidth, realHeight } = data;
    dispatch(setRealDimentions(realWidth, realHeight));
  }, [winWidth]);
  
  useEffect (() => {
    dispatch(setRenderDimentions(width, height));
  }, [width, height]);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Stage width={ width } height={ height }>
          <Provider store={store}>
            <Layer>
              <Image image={ floorplan } width={ width } height={ height } />
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