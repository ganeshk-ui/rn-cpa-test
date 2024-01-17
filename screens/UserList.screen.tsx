import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';
import AccordionItem from '../components/AccordionItem.comp';
import {fetchUsersList} from '../actions/getUsersList.action';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {combineReducers} from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import {RootStackParamList} from '../App';

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'UserList'
>;

type User = {
  id: string;
  name: string;
};

function UserList(props: Props) {
  const {navigation} = props;
  const userList = useSelector(
    (state: RootState) => state.usersListReducer.userList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        {userList.map((user: User, idx: number) => {
          return (
            <AccordionItem
              title={user.name}
              key={idx}
              userId={user.id}
              nav={navigation}></AccordionItem>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
