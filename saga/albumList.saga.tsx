import {takeEvery, put} from 'redux-saga/effects';
import {GET_ALBUM_LIST_API, FETCH_ALBUM_LIST} from '../utils/constants';
import {setAlbumList} from '../actions/getAlbumList.action';

type Props = {
  userId: string;
  id: string;
  title: string;
};

type Action = {
  type: string;
  data: number;
};

function* getAlbumList({data}: Action) {
  const response: Response = yield fetch(`${GET_ALBUM_LIST_API}${data}`);

  // Parsing the JSON data from the API response
  const responseData: Props[] = yield response.json();
  yield put(setAlbumList({[data]: responseData}));
}

function* albumListData() {
  yield takeEvery(FETCH_ALBUM_LIST, getAlbumList);
}

export default albumListData;
