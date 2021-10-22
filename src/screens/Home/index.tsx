import React, {useEffect} from 'react';
import {Text} from 'react-native';
import List from '../../components/List';
import {inject, observer} from 'mobx-react';
import {ScrollView} from 'react-native-gesture-handler';

const Home = inject('rootTree')(
  observer(props => {
    useEffect(() => {
      props.rootTree.fetchBooks();
    }, []);
    const {rootTree} = props;
    if (!rootTree) return null;
    return (
      <ScrollView>
        <Text>{rootTree.user.name}</Text>
        <List addedByMe={false} data={rootTree.books} />
      </ScrollView>
    );
  }),
);

export default Home;
