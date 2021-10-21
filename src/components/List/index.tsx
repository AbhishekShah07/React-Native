import React from 'react';
import {View, Text} from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';
import {inject, observer} from 'mobx-react';

@inject('rootTree')
@observer
class List extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        {this.props.data.map((item, index) => {
          return <ListItem key={index} data={item} />;
        })}
      </View>
    );
  }
}

export default List;
