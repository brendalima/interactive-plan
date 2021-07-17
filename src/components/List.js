import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const state = useSelector(({ floorPlan }) => floorPlan);
  const { furnitures } = state;

  return (
    <ol>
      {furnitures.map((furniture) => {
        const {shape, label, x, y, d} = furniture;
        if (shape === 'Rectangle') {
          return (
            <li>
              {`${label} - ${x}cm x ${y}cm`}
            </li>
          );
        }
        return (
          <li>
            {`${label} - ${d}cm`}
          </li>
        );
      })}
    </ol>
  )
}

export default List;