import {FETCH_USERS_LIST, SET_USERS_LIST} from '../utils/constants';

export function fetchUsersList() {
  return {
    type: FETCH_USERS_LIST,
  };
}

export function setUsersList(data: {}) {
  return {
    type: SET_USERS_LIST,
    data,
  };
}
