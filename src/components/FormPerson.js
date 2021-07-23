import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonEntry } from '../actions/floorPlan';

function FormPerson() {
  const dispatch = useDispatch();
  const [customWidth, setCustomWidth] = useState(50);
  const [customThickness, setCustomThickness] = useState(30);

  const handleSubmit = () => {
    dispatch(setPersonEntry(customWidth, customThickness));
  }

  return (
    <form className="form-person">
      <div className="inputs">
        <label className="form-label">
          Enter custom body width (cm)
          <input
            className="form-control"
            name='width'
            value={ customWidth }
            type="number"
            onChange={ ({ target }) => setCustomWidth(target.value) }
          />
        </label>
        <label className="form-label">
          Enter custom body thickness (cm)
          <input
            className="form-control"
            name='thickness'
            value={ customThickness }
            type="number"
            onChange={ ({ target }) => setCustomThickness(target.value) }
          />
        </label>
      </div>
      <div>
        <button type="button" onClick={ handleSubmit }>Enviar</button>
      </div>
    </form>
  )
}

export default FormPerson;