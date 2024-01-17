import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {fetchPhotoList} from '../actions/getPhotoList.action';
import {combineReducers} from '@reduxjs/toolkit';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import {RootStackParamList} from '../App';

export type Props = NativeStackScreenProps<RootStackParamList, 'PhotoList'>;

type PhotoAlbum = {
  albumId: string;
  id: string;
  title: string;
  thumbnailUrl: string;
};

// type Props = NativeStackScreenProps<RootStackParamList, 'PhotoList'>;

function PhotoList({route}: Props) {
  const {title, id} = route.params;

  const photoList = useSelector(
    (state: RootState) => state.photoListReducer.photoList,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotoList(id));
  }, []);
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.screenHeader}>
      <Text style={styles.albumTitle}>{title}</Text>
      <ScrollView>
        <View style={styles.photoLayout}>
          {photoList.map((item: PhotoAlbum, idx: number) => {
            return (
              <Image
                source={{
                  uri: item.thumbnailUrl,
                }}
                key={idx}
                width={windowWidth / 3.2}
                height={150}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  photoLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'center',
  },
  albumTitle: {
    fontSize: 22,
    padding: 5,
    // color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,

  },
});

export default PhotoList;
