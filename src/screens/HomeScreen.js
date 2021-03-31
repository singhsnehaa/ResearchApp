import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class HomeScreen extends Component {
render() {
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen</Text>
                <Text>Click to Sidebar Scroll</Text>
            </View>
        )
    }
  
}


const styles = StyleSheet.create();