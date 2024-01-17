import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './store';
import UserList from './screens/UserList.screen';
import PhotoList from './screens/PhotoList.screen';

export type RootStackParamList = {
  UserList: undefined;
  PhotoList: {
    id: number;
    title: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList">
          <Stack.Screen name="PhotoList" component={PhotoList} />
          <Stack.Screen name="UserList" component={UserList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
