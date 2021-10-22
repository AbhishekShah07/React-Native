/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Update = inject('rootTree')(
  observer(props => {
    const navigation = useNavigation();
    const route = useRoute();

    const [book, setBook] = useState({
      name: '',
      author: '',
      price: 0,
    });

    useEffect(() => {
      props.rootTree.fetchSingleBook(route.params.id);
      setBook(props.rootTree.book);
    }, []);
    const {rootTree} = props;
    return (
      <SafeAreaView style={styles.mainView}>
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styles.back}
            size={20}
            name="back"
          />
          <Text style={styles.headerText}>Update book</Text>
          <View style={{width: 55}} />
        </View>
        <Input
          placeholder="Book Name"
          onChangeText={(e: string) => setBook({...book, name: e})}
          value={book.name}
        />
        <Input
          placeholder="Author Name"
          onChangeText={(e: string) => setBook({...book, author: e})}
          value={book.author}
        />
        <Input
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={(e: number) => setBook({...book, price: e})}
          value={book.price}
        />
        <Button
          onPress={() => {
            rootTree.updateSingleBook({...book, id: route.params.id});
            rootTree.fetchBooks();
            rootTree.fetchMyBooks();
            navigation.goBack();
          }}
          title="Update"
        />
      </SafeAreaView>
    );
  }),
);

export default Update;
