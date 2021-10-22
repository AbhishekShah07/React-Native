import React from 'react';
import {View, Text} from 'react-native';
import {rootStore} from '../../mst';
import List from '../../components/List';
import {inject, observer} from 'mobx-react';

@inject('rootTree')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootTree: null,
    };
  }
  componentDidMount() {
    const {rootTree} = rootStore();
    this.setState({
      rootTree,
    });
    rootTree.fetchBooks();
  }
  render() {
    const {rootTree} = this.state;
    if (!rootTree) return null;

    return (
      <View>
        <Text>{rootTree.user.name}</Text>
        <List data={rootTree.books} />
      </View>
    );
  }
}

export default Home;
