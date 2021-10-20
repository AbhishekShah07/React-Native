import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [book, setBook] = useState({loading: true, data: [], error: false});
  useEffect(() => {
    const getBook = () => {
      const booksQuery = firestore().collection('books');
      booksQuery.onSnapshot(
        querySnapshot => {
          setBook({error: false, loading: false, data: querySnapshot.docs});
        },
        err => {
          setBook({...book, loading: false, error: true});
        },
      );
    };
    getBook();
  }, []);
  if (book.loading && book.data.length === 0) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      {book.data.map(item => {
        // console.log(item);
        return (
          // <View>
          <Text>{item._data.name}</Text>
          // </View>
        );
      })}
    </View>
  );
};

export default Home;
