import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = (props: {title: String; onPress: Function}) => {
  return (
    <TouchableOpacity style={styles.buttonView} {...props}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
