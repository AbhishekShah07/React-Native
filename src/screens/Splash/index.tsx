import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  function onAuthStateChanged(userData: object) {
    if (userData) {
      navigation.reset({index: 0, routes: [{name: 'Tab'}]});
    } else {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    }
  }
  useEffect(() => {
    setTimeout(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, 1000);
  }, []);

  return (
    <View style={styles.splashView}>
      <Image
        style={styles.image}
        source={require('../../assets/images/Logo.png')}
      />
      <Text style={styles.text}>TS Project</Text>
    </View>
  );
};

export default Splash;
