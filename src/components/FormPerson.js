import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonEntry } from '../actions/floorPlan';

function FormPerson() {
  const dispatch = useDispatch();
  const [customWidth, setCustomWidth] = useState(50);
  const [customThickness, setCustomThickness] = useState(30);

  const handleSubmit = () => {
    dispatch(setPersonEntry(Number(customWidth), Number(customThickness)));
  }

  return (
    <form>
      <label>Enter custom body width (cm).</label>
      <input
        name='width'
        value={customWidth}
        type="number"
        onChange={ ({ target }) => setCustomWidth(target.value) }
      />
      <label>Enter custom body thickness (cm).</label>
      <input
        name='thickness'
        value={customThickness}
        type="number"
        onChange={ ({ target }) => setCustomThickness(target.value) }
      />
      <button type="button" onClick={ handleSubmit }>Enviar</button>
    </form>
  )
}

export default FormPerson;