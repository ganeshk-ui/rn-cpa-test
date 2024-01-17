import {takeEvery, put} from 'redux-saga/effects';
import {GET_PHOTO_LIST_API, FETCH_PHOTO_LIST} from '../utils/constants';
import {setPhotoList} from '../actions/getPhotoList.action';

type Props = {
  albumId: string;
  id: string;
  title: string;
  thumbnailUrl: string;
};

type Action = {
  type: string;
  data: number;
};

function* getPhotoList({data}: Action) {
  const response: Response = yield fetch(`${GET_PHOTO_LIST_API}${data}`);

  // Parsing the JSON data from the API response
  const responseData: Props[] = yield response.json();
  yield put(setPhotoList(responseData));
}

function* photoListData() {
  yield takeEvery(FETCH_PHOTO_LIST, getPhotoList);
}

export default photoListData;
