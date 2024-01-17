//Location: src/reducers/root_reducer.js

import {combineReducers} from 'redux';
import {usersListReducer} from './usersList.reducer';
import {albumListReducer} from './albumList.reducer';
import {photoListReducer} from './photoList.reducer';

const rootReducer = combineReducers({
  usersListReducer,
  albumListReducer,
  photoListReducer,
});

export default rootReducer;
