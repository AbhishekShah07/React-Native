import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const SocialMediaButton = ({
  color,
  iconName,
  title,
}: {
  color: String;
  iconName: String;
  title: String;
}) => {
  return (
    <TouchableOpacity style={{...styles.buttonContainer, borderColor: color}}>
      <View style={{...styles.iconView, borderRightColor: color}}>
        <Icon size={20} name={iconName} color={color} />
      </View>
      <View style={styles.textView}>
        <Text style={{...styles.text, color: color}}>{title}</Text>
      </View>
      <View style={styles.iconView} />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;
