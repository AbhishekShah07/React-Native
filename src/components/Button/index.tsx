import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonView}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
