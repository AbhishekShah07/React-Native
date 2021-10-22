import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const ListItem = inject('rootTree')(
  observer(({data, showUpdate, rootTree}) => {
    const navigation = useNavigation();
    return (
      <View style={styles.mainView}>
        <View style={styles.bookView}>
          <Text style={styles.bookText}>{data.name}</Text>
          {showUpdate && (
            <>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => navigation.navigate('Update', {id: data.id})}>
                <Icon name="edit" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => {
                  rootTree.deleteBook(data.id);
                  rootTree.fetchBooks();
                  rootTree.fetchMyBooks();
                }}>
                <Icon name="delete" size={20} />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.priceView}>
          <Text style={styles.subText}>
            <Text style={styles.subTextLabel}>Author:</Text> {data.author}
          </Text>
          <Text style={styles.subText}>
            {' '}
            <Text style={styles.subTextLabel}>Price:</Text> {data.price}
          </Text>
        </View>
      </View>
    );
  }),
);

export default ListItem;
