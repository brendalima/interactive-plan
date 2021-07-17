import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonEntry } from '../actions/floorPlan';

function FormShapes() {
  const dispatch = useDispatch();
  const [shape, setShape] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [d, setD] = useState(0);

  const handleSubmit = () => {
    dispatch(setFurnitures({
      shape,
      x,
      y,
      d,
    }));
  }

  const renderDimentionForm = () => {
    if (shape === 'Rectangle') {
      return (
        <div>
          <label>Horizontal dimention (cm):</label>
          <input
            name="x"
            value={x}
            type="number"
            onChange={ ({ target }) => setX(target.value) }
          />
          <label>Vertical dimention (cm):</label>
          <input
            name="y"
            value={y}
            type="number"
            onChange={ ({ target }) => setY(target.value) }
          />
        </div>
      )
    }
    if (shape === 'Circle') {
      return (
        <div>
          <label>Diameter dimention (cm):</label>
          <input
            name="d"
            value={d}
            type="number"
            onChange={ ({ target }) => setD(target.value) }
          />
        </div>
      )
    }
  }

  return (
    <form>
      <label>Pick the geometry of your furniture</label>
      <select
        value={ comparison }
        onChange={ ({ target }) => setShape(target.value) }
      >
        <option hidden>Your shape</option>
        <option>Rectangle</option>
        <option>Circle</option>
      </select>

      { renderDimentionForm() }

      <button type="button" onClick={ handleSubmit }>Enviar</button>
    </form>
  )
}

export default FormShapes;