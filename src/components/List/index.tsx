import React from 'react';
import {View} from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';
import {inject, observer} from 'mobx-react';

const List = inject('rootTree')(
  observer(props => {
    return (
      <View style={styles.mainView}>
        {props.data.map((item, index) => {
          return (
            <ListItem showUpdate={props.addedByMe} key={index} data={item} />
          );
        })}
      </View>
    );
  }),
);

export default List;
