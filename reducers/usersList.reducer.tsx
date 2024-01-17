//Location: src/reducers/quote_reducer.js

import {SET_USERS_LIST} from '../utils/constants';

const initialState = {
  userList: [],
};

export const usersListReducer = (
  state = initialState,
  action: {type: string; data: {}},
) => {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        userList: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
