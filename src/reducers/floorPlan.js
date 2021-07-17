import {
  SET_REAL_DIMENTIONS,
  SET_PERSON_ENTRY,
  SET_FURNITURES,
  DELETE_FURNITURE
} from '../actions/floorPlan';

const INITIAL_STATE = {
  realWidth: '',
  realHeight: '',
  personWidthEntry: 50,
  personThicknessEntry: 30,
  furnitures: [],
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
  default:
    return state;
  }
};

export default floorPlan;
