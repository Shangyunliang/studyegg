import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'component/spa/reducers';

export const create = initalState => {
  return createStore(reducers, initalState);
};
