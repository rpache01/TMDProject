import React from 'react';
import {
  SafeAreaView, 
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  } from 'react-native';
import { MenuScreen } from '../../Screens/MenuScreen';
//import CarItem from '../CarItem';
import styles from './styles';

import App from '../../App';
import {Actions, Router, Scene} from "react-native-router-flux";


const Header= () => {
   
  return(
      <View style= {styles.container}>
         <Image style={styles.logo} source={require('../../assets/TMD1.png')}/>
         <TouchableOpacity style={styles.menu} onPress={()=>{Actions.scene2("MenuScreen")}}>
            <Image style={styles.menu} source={require('../../assets/menu2.png')} />
              
            
         </TouchableOpacity>
          
         
      </View>
  );
    
};
// const RootStack = createStackNavigator({
//     Home: {
//       screen: App
//     },
//     MenuScreen:{
//       screen: MenuScreen
//     }
  //});

export default Header;


