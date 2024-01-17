import {
  FETCH_ALBUM_LIST,
  SET_ALBUM_LIST,
  UPDATE_ALBUM_LIST,
} from '../utils/constants';

export function fetchAlbumList(data: {}) {
  return {
    type: FETCH_ALBUM_LIST,
    data,
  };
}

export function setAlbumList(data: {}) {
  return {
    type: SET_ALBUM_LIST,
    data,
  };
}

export function updateAlbumList(data: {}) {
  return {
    type: UPDATE_ALBUM_LIST,
    data,
  };
}
