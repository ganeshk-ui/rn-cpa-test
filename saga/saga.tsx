import {all, fork} from 'redux-saga/effects';
import userListData from './userList.saga';
import albumListData from './albumList.saga';
import photoListData from './photoList.saga';
function* rootSaga() {
  yield all([fork(userListData), fork(albumListData), fork(photoListData)]);
}

export default rootSaga;
