import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setFurnitures} from '../actions/floorPlan';

function FormShapes() {
  const dispatch = useDispatch();
  const [shape, setShape] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [d, setD] = useState(0);
  const [label, setLabel] = useState('');

  const clearForm = () => {
    setShape('');
    setX(0);
    setY(0);
    setD(0);
    setLabel('');
  }

  const handleSubmit = () => {
    dispatch(setFurnitures({
      shape,
      label,
      x,
      y,
      d,
    }));
    clearForm();
  }

  const renderDimentionForm = () => {
    if (shape === 'Rectangle') {
      return (
        <div className="mt-2 inputs">
          <label className="form-label mr-2">
            Label
            <input
              className="form-control"
              name="label"
              value={label}
              type="text"
              onChange={ ({ target }) => setLabel(target.value) }
              required
            />
          </label>
          <label className="form-label mr-2">
            Horizontal dimention (cm)
            <input
              className="form-control"
              name="x"
              value={x}
              type="number"
              onChange={ ({ target }) => setX(target.value) }
              required
            />
          </label>
          <label className="form-label">
            Vertical dimention (cm)
            <input
              className="form-control"
              name="y"
              value={y}
              type="number"
              onChange={ ({ target }) => setY(target.value) }
              required
            />
          </label>
        </div>
      )
    }
    if (shape === 'Circle') {
      return (
        <div className="mt-2 inputs">
          <label className="form-label mr-2">
            Label
            <input
              className="form-control mr-2"
              name="label"
              value={label}
              type="text"
              onChange={ ({ target }) => setLabel(target.value) }
              required
            />
          </label>
          <label className="form-label">
            Diameter dimention (cm)
            <input
              className="form-control"
              name="d"
              value={d}
              type="number"
              onChange={ ({ target }) => setD(target.value) }
              required
            />
          </label>
        </div>
      )
    }
  }

  return (
    <form className="form-shapes">
      <label className="form-label">
        Pick the geometry of your furniture
        <select
          className="form-select"
          value={ shape }
          onChange={ ({ target }) => setShape(target.value) }
        >
          <option hidden>Your shape</option>
          <option>Rectangle</option>
          <option>Circle</option>
        </select>
      </label>

      { renderDimentionForm() }

      <button type="button" onClick={ handleSubmit }>Enviar</button>
    </form>
  )
}

export default FormShapes;