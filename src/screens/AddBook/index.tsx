import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';
import {rootStore} from '../../mst';

const AddBook = () => {
  const rootData = rootStore();
  const [book, setBook] = useState({name: '', author: '', price: 0});
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
        onChangeText={(e: number) => setBook({...book, price: e})}
        value={book.price}
      />
      <Button
        onPress={() => rootData.addBook(book.name, book.author, book.price)}
        title="Add"
      />
    </View>
  );
};

export default AddBook;
