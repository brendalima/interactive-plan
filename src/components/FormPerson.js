import React from 'react';

function FormPerson() {
  return (
    <form>
      <label>Enter custom body width (cm).</label>
      <input name='width' value="{customWidth}" type="number" placeholder="Default value is 50" />
      <label>Enter custom body thickness (cm).</label>
      <input name='thickness' value="{customThickness}" type="number" placeholder="Default value is 30" />
    </form>
  )
}

export default FormPerson;