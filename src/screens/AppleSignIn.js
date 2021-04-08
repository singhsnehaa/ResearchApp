import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';
import {COLORS} from '../common/Colors';
import Icons from '../common/Icons';
import Header from '../common/Header';

export class AppleSignIn extends Component {
  render() {
    return (
      <>
        <Header
          title={'Apple SignIn'}
          MenuDrawerButton
          headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
          titleStyle={{color: COLORS.WHITE}}
        />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Apple Sign In Screen</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({});
