import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

const AddBook = () => {
  const [book, setBook] = useState({name: '', author: '', price: ''});
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
        onChangeText={(e: string) => setBook({...book, price: e})}
        value={book.price}
      />
      <Button onPress={() => console.log('add')} title="Add" />
    </View>
  );
};

export default AddBook;
