//Team 28
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Actions, Router, Scene} from "react-native-router-flux"; //install package
import Glossary from './Screens/Glossary';
import Handbook from './Screens/Handbook';
import Home from './Screens/Home';
import Leadership from './Screens/Leadership';
import MenuScreen from './Screens/MenuScreen';

export default function App() {
  return (
    <Router>
       <Scene key="app">
          <Scene key="scene1" component={Home} hideNavBar />
          <Scene key="scene2" component={MenuScreen} hideNavBar/>
          <Scene key="scene3" component={Handbook} hideNavBar/>
          <Scene key="scene4" component={Glossary} hideNavBar/>
          <Scene key="scene5" component={Leadership} hideNavBar/>
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
