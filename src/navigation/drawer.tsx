import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './tabNavigation';
import DrawerComponent from '../components/Drawer';
import AddBook from '../screens/AddBook';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerComponent />}>
      <Drawer.Screen name="TS Project" component={TabNavigator} />
      <Drawer.Screen name="Add Book" component={AddBook} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
