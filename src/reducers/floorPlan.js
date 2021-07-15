import {
  SET_REAL_DIMENTIONS
} from '../actions/floorPlan';

const INITIAL_STATE = {
  realWidth: '',
  realHeight: '',
};

const floorPlan = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_REAL_DIMENTIONS:
    return { ...state, realWidth: action.width, realHeight: action.height };
  }
};

export default floorPlan;
