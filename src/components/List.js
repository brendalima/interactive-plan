import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFurniture } from '../actions/floorPlan';

function List() {
  const state = useSelector(({ floorPlan }) => floorPlan);
  const { furnitures } = state;
  const dispatch = useDispatch();

  const deletePiece = (current) => {
    const newArray = furnitures.filter(element =>
      current !== element.label);
    dispatch(deleteFurniture(newArray));
  }

  return (
    <ol>
      {furnitures.map((furniture) => {
        const {shape, label, x, y, d} = furniture;
        if (shape === 'Rectangle') {
          return (
            <li>
              {`${label} - ${x}cm x ${y}cm`}
              <button
                type="button"
                onClick={() => deletePiece(label)}
              >
                x
              </button>
            </li>
          );
        }
        return (
          <li>
            {`${label} - ${d}cm`}
            <button
              type="button"
              onClick={() => deletePiece(label)}
            >
              x
            </button>
          </li>
        );
      })}
    </ol>
  )
}

export default List;