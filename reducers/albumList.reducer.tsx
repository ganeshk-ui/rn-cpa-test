import {SET_ALBUM_LIST, UPDATE_ALBUM_LIST} from '../utils/constants';

const initialState = {
  albumList: [],
};

export const albumListReducer = (
  state = initialState,
  action: {type: string; data: {}},
) => {
  switch (action.type) {
    case SET_ALBUM_LIST:
      return {
        ...state,
        albumList: {...state.albumList, ...action.data},
      };
    case UPDATE_ALBUM_LIST:
      return {
        ...state,
        albumList: {...state.albumList, ...action.data},
      };
    default:
      return {
        ...state,
      };
  }
};
