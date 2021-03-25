//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import PageList from '../Components/PageList';
import Header from '../Components/Header';
import {Component} from "react";
//import  StackNavigator  from "react-navigation";
//import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


//import { HeaderBackButton } from 'react-navigation-stack';
//import {Actions, Router, Scene} from "react-native-router-flux";

 export default class Home extends Component{
   render(){
        return(
            <View style={styles.container}>
            <Header /> 
            <PageList />
            
            <StatusBar style="auto" />
            </View>
        );
   }
   
   
 }
 const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
  
    });
 