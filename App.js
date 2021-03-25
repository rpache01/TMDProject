//Team 28
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Actions, Router, Scene} from "react-native-router-flux"; //install package
import Home from './Screens/Home';
import MenuScreen from './Screens/MenuScreen';

export default function App() {
  return (
    <Router>
       <Scene key="app">
          <Scene key="scene1" component={Home} hideNavBar />
          <Scene key="scene2" component={MenuScreen} hideNavBar/>
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
