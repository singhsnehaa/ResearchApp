import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import UploadResume from '../screens/UploadResume';
import ContactList from '../screens/ContactList';
// import Signup from '../screens/Signup';
// import Profile from '../screens/Profile';
// import EditProfile from '../screens/EditProfile';


const Stack = createStackNavigator();

function AppRouter() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UploadResume" screenOptions={{ headerShown: false }}>
      
          <Stack.Screen name="UploadResume" component={UploadResume} />
          <Stack.Screen name="ContactList" component={ContactList} />
          {/* <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} /> */}
        
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default AppRouter;