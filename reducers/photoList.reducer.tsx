//Location: src/reducers/quote_reducer.js

import {SET_PHOTO_LIST} from '../utils/constants';

const initialState = {
  photoList: [],
};

export const photoListReducer = (
  state = initialState,
  action: {type: string; data: {}},
) => {
  switch (action.type) {
    case SET_PHOTO_LIST:
      return {
        ...state,
        photoList: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
