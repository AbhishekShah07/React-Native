import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  iconName?: String;
  placeholder: String;
  onChangeText: Function;
  value: String;
}

const Input = (props: Props) => {
  return (
    <View style={styles.mainView}>
      {props.iconName && (
        <View style={styles.iconView}>
          <Icon
            style={styles.icon}
            name={props.iconName}
            size={25}
            color="#666"
          />
        </View>
      )}
      <TextInput
        autoCorrect={false}
        autoComplete="off"
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

export default Input;
