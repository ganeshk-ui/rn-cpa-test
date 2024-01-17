import {takeEvery, put} from 'redux-saga/effects';
import {GET_USER_LIST_API, FETCH_USERS_LIST} from '../utils/constants';
import {setUsersList} from '../actions/getUsersList.action';

type Props = {
  id: string;
  name: string;
};

// Worker saga function to handle the asynchronous fetching of quotes data
function* getUsersList() {
  const response: Response = yield fetch(GET_USER_LIST_API);

  // Parsing the JSON data from the API response
  const responseData: Props[] = yield response.json();
  yield put(setUsersList(responseData));
}

function* userListData() {
  yield takeEvery(FETCH_USERS_LIST, getUsersList);
}

export default userListData;
