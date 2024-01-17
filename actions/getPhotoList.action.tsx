//Location: src/actions/quote_action.js

import {FETCH_PHOTO_LIST, SET_PHOTO_LIST} from '../utils/constants';

// Action creator function for initiating the fetch quotes action
export function fetchPhotoList(data: {}) {
  return {
    type: FETCH_PHOTO_LIST,
    data,
  };
}

// Action creator function for setting quotes data in the Redux store
export function setPhotoList(data: {}) {
  return {
    type: SET_PHOTO_LIST,
    data,
  };
}
