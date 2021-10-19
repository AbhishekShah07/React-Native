import React from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../components/Button';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }
        title="Signout"
      />
    </View>
  );
};

export default Home;
