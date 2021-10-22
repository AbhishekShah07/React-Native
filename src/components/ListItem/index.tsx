import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({data, showUpdate}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.bookView}>
        <Text style={styles.bookText}>{data.name}</Text>
        {showUpdate && (
          <>
            <TouchableOpacity style={styles.updateButton}>
              <Icon name="edit" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.updateButton}>
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
};

export default ListItem;
