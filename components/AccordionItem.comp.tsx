import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fetchAlbumList, updateAlbumList} from '../actions/getAlbumList.action';
import {combineReducers} from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
// import {UserListNavProps} from '../screens/UserList.screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type AccordionProps = {
  title: string;
  userId: string;
  nav: NativeStackNavigationProp<RootStackParamList, 'UserList'>;
};

function AccordionItem(props: AccordionProps) {
  const {title, userId, nav} = props;

  const albumList = useSelector(
    (state: RootState) => state.albumListReducer.albumList,
  );
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  function toggleItem() {
    setExpanded(!expanded);
    if (!albumList[userId]) {
      dispatch(fetchAlbumList(userId));
    }
  }

  const body = (
    <View style={styles.accordBody}>
      <FlatList
        data={albumList[userId]}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#3a7ca5',
              margin: 2,
            }}
            onPress={() => {
              nav.navigate('PhotoList', {
                id: item.id,
                title: item.title,
              });
              // navigation.navigate('PhotoList');
            }}>
            <Text style={styles.item} key={item.id}>
              {item.title}
            </Text>
            <TouchableOpacity
              onPress={() => {
                const clonedList = [...albumList[userId]];
                const _list = clonedList.filter(_d => item.id !== _d.id);
                dispatch(updateAlbumList({[userId]: _list}));
              }}>
              <Icon
                name={'trash'}
                size={20}
                color="#bbb"
                style={{paddingRight: 10}}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={toggleItem}>
        <Text style={styles.accordTitle}>{title}</Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#bbb"
        />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

const styles = StyleSheet.create({
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#0047ab',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordTitle: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  accordBody: {
    padding: 12,
  },

  item: {
    margin: 10,
    maxWidth: '80%',
    color: '#FFFFFF',
  },
});

export default AccordionItem;
