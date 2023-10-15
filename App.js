import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text , View ,Button } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainContainer from './screens/MainContainer';

const Stack = createStackNavigator();

function App() {
  return (
    <MainContainer/>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
