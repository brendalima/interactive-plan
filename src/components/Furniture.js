import React from 'react';
import { useSelector } from 'react-redux';
import { Layer, Rect, Circle } from 'react-konva';

function Furniture() {
  const state = useSelector(({ floorPlan }) => floorPlan);
  const { furnitures, realWidth, realHeight } = state;

  return (
    <Layer>
      {furnitures.map((furniture) => {
        const { shape, x, y, d } = furniture
        if (shape === 'Rectangle') {
          return (
            <Rect
              width={(500 * x) / realWidth}
              height={(500 * y) / realHeight}
              fill="white"
              stroke="black"
              draggable
            />
          )
        }
        return (
          <Circle
            radius={ ((500 * d) / realWidth) / 2 }
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