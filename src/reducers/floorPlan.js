import {
  SET_REAL_DIMENTIONS,
  SET_PERSON_ENTRY
} from '../actions/floorPlan';

const INITIAL_STATE = {
  realWidth: '',
  realHeight: '',
  personWidthEntry: 50,
  personThicknessEntry: 30,
};

const floorPlan = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_REAL_DIMENTIONS:
    return { ...state, realWidth: action.width, realHeight: action.height };
  case SET_PERSON_ENTRY:
    return { ...state, personWidthEntry: action.width, personThicknessEntry: action.thickness };
  default:
    return state;
  }
};

export default floorPlan;
