import { combineReducers, createStore } from 'redux';
import { bagReducer } from './reducer.js/bag-reducer'
import { profileReducer } from './reducer.js/user-reducer';

const rootReducer = combineReducers({
    // Combine your reducers here
    bagReducer,
    profileReducer,
  });

export const store = createStore(rootReducer)





