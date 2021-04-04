import * as React from 'react';
import {View, Text} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import {ContactList} from '../screens/ContactList';
import {UploadResume} from '../screens/UploadResume';
import {VideoList} from '../screens/VideoList';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="VideoList" component={VideoList} />
        <Drawer.Screen name="ContactList" component={ContactList} />
        <Drawer.Screen name="UploadResume" component={UploadResume} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
