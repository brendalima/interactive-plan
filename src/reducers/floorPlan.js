import {
  SET_REAL_DIMENTIONS,
  SET_PERSON_ENTRY,
  SET_FURNITURES,
  DELETE_FURNITURE,
  SET_RENDER_DIMENTIONS
} from '../actions/floorPlan';

const INITIAL_STATE = {
  realWidth: 0,
  realHeight: 0,
  personWidthEntry: 50,
  personThicknessEntry: 30,
  furnitures: [],
  renderWidth: 0,
  renderHeight: 0,
};

const floorPlan = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_REAL_DIMENTIONS:
    return { ...state, realWidth: action.width, realHeight: action.height };
  case SET_PERSON_ENTRY:
    return { ...state, personWidthEntry: action.width, personThicknessEntry: action.thickness };
  case SET_FURNITURES:
    return { ...state, furnitures: [...state.furnitures, action.furniture] };
  case DELETE_FURNITURE:
    return { ...state, furnitures: action.furniture };
  case SET_RENDER_DIMENTIONS:
    return { ...state, renderWidth: action.width, renderHeight: action.height };
  default:
    return state;
  }
};

export default floorPlan;
