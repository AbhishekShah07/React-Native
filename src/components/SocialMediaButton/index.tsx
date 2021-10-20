import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SocialMediaButton = props => {
  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, borderColor: props.color}}
      {...props}>
      <View style={{...styles.iconView, borderRightColor: props.color}}>
        <Icon size={20} name={props.iconName} color={props.color} />
      </View>
      <View style={styles.textView}>
        <Text style={{...styles.text, color: props.color}}>{props.title}</Text>
      </View>
      <View style={styles.iconView} />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;
