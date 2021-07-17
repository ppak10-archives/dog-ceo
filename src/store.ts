/**
 * store.ts
 * Creates redux store and attaches middleware.
 */

// Node Modules
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import api from 'api/reducer';
import common from 'common/reducer';

const reducers = combineReducers({
  api,
  common,
});

const rootReducer = (state, action) => {
  if (action.type === 'INITIAL_STATE') {
    // Catches INITIAL_STATE action type before creating api reducers and
    // resets redux reducer store back to initial state if passed.
    state = undefined;
  }

  return reducers(state, action);
};

// Store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
