import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListItem = ({data}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.bookView}>
        <Text style={styles.bookText}>{data.name}</Text>
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
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
};

export default ListItem;
