import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
// import Home from '../screens/Home';
import DrawerNavigator from './drawer';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Tab" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
