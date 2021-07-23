import React from 'react';
import { useSelector } from 'react-redux';
import { Layer, Rect, Circle } from 'react-konva';

function Furniture() {
  const state = useSelector(({ floorPlan }) => floorPlan);
  const {
    furnitures,
    realWidth,
    realHeight,
    renderWidth,
    renderHeight
  } = state;

  return (
    <Layer>
      {furnitures.map((furniture) => {
        const { shape, x, y, d } = furniture
        if (shape === 'Rectangle') {
          return (
            <Rect
              width={ (renderWidth * x) / realWidth }
              height={ (renderHeight * y) / realHeight }
              fill="white"
              stroke="black"
              draggable
            />
          )
        }
        return (
          <Circle
            radius={ ((renderWidth * d) / realWidth) / 2 }
            fill="white"
            stroke="black"
            draggable
          />
        )
      })}
    </Layer>
  )
}

export default Furniture;