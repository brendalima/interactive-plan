export const SET_REAL_DIMENTIONS = 'SET_REAL_DIMENTIONS';
export const setRealDimentions = (width, height) => ({
  type: SET_REAL_DIMENTIONS,
  width,
  height,
});

export const SET_PERSON_ENTRY = 'SET_PERSON_ENTRY';
export const setPersonEntry = (width, thickness) => ({
  type: SET_PERSON_ENTRY,
  width,
  thickness,
});

export const SET_FURNITURES = 'SET_FURNITURES';
export const setFurnitures = (furniture) => ({
  type: SET_FURNITURES,
  furniture
});

export const DELETE_FURNITURE = 'DELETE_FURNITURE';
export const deleteFurniture = (furniture) => ({
  type: DELETE_FURNITURE,
  furniture
});

export const SET_RENDER_DIMENTIONS = 'SET_RENDER_DIMENTIONS';
export const setRenderDimentions = (width, height) => ({
  type: SET_RENDER_DIMENTIONS,
  width,
  height,
});