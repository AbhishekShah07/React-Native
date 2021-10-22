import React from 'react';
import {View} from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';
import {inject, observer} from 'mobx-react';

interface Props {
  data: Array<{name: String; author: String; price: Number}>;
}
@inject('rootTree')
@observer
class List extends React.Component<Props> {
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
