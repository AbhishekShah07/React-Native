import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const AddBook = inject('rootTree')(
  observer(props => {
    const navigation = useNavigation();
    const [book, setBook] = useState({
      name: 'Book name',
      author: 'Author name',
      price: 300,
    });
    const {rootTree} = props;
    return (
      <View style={styles.mainView}>
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
            rootTree.addBook(book.name, book.author, book.price);
            rootTree.fetchBooks();
            navigation.navigate('TS Project');
          }}
          title="Add"
        />
      </View>
    );
  }),
);

export default AddBook;
