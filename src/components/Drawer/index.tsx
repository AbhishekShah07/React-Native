import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Button from '../Button';

const Drawer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainView}>
      <View>
        <TouchableOpacity
          style={styles.routesView}
          onPress={() => navigation.navigate('TS Project')}>
          <Text style={styles.routesText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routesView}
          onPress={() => navigation.navigate('Add Book')}>
          <Text style={styles.routesText}>Add book</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signOutView}>
        <Button
          title="Sign Out"
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log('User signed out!'))
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Drawer;
