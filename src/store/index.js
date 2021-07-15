import { createStore, compose } from 'redux';
import floorPlan from '../reducers/floorPlan';

const extension = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

const store = createStore(floorPlan, compose(extension));

export default store;
