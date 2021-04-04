import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Root} from 'native-base';
import AppRouter from './src/navigation/Routes';
import {HomeScreen} from './src/screens/HomeScreen';
import {ContactList} from './src/screens/ContactList';
import {UploadResume} from './src/screens/UploadResume';
import {VideoList} from './src/screens/VideoList';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Root>
      <AppRouter />

      {/* <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="VideoList" component={VideoList} />
            <Drawer.Screen name="ContactList" component={ContactList} />
            <Drawer.Screen name="UploadResume" component={UploadResume} />
          </Drawer.Navigator>
    </NavigationContainer> */}
    </Root>
  );
};

export default App;
