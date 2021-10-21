import React from 'react';
import {View} from 'react-native';
import {rootStore} from '../../mst';
import List from '../../components/List';
import {inject, observer} from 'mobx-react';

@inject('rootTree')
@observer
class Home extends React.Component {
  rootData = rootStore();
  componentDidMount() {
    this.rootData.fetchBooks();
  }
  render() {
    return (
      <View>
        <List data={this.rootData.books} />
      </View>
    );
  }
}

export default Home;
