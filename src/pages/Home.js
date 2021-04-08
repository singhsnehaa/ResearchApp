import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function Home(props) {
  return (
    <>
      <Header
        title={'Home'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Page</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HomeDetails')}>
          <Text>Go to Home Details</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
