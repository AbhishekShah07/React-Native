import React, {useEffect} from 'react';
import {Text} from 'react-native';
import List from '../../components/List';
import {inject, observer} from 'mobx-react';
import {ScrollView} from 'react-native-gesture-handler';

const MyList = inject('rootTree')(
  observer(props => {
    useEffect(() => {
      props.rootTree.fetchMyBooks();
    }, []);
    const {rootTree} = props;
    if (!rootTree) return null;
    return (
      <ScrollView>
        <Text>{rootTree.user.name}</Text>
        <List addedByMe={true} data={rootTree.myBooks} />
      </ScrollView>
    );
  }),
);

export default MyList;
