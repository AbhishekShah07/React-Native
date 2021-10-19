import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './routes';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
