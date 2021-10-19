import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.iconView}>
        <Icon
          style={styles.icon}
          name={props.iconName}
          size={25}
          color="#666"
        />
      </View>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

export default Input;
