import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MyList from '../screens/MyList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        tabBarIconStyle: {display: 'none'},
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My List" component={MyList} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
