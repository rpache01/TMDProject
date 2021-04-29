import React from "react";
import { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    ViewBase,
    Alert,
    Dimensions,
    FlatList
} from "react-native";
import {Actions, Router, Scene} from "react-native-router-flux"; // download and install using terminal
//import CarItem from "../Components/CarItem";
import  PageListTwo from "../Components/PageListTwo";
import  PageList from "../Components/PageList";
import styles from "./styles";
//import StyledButton from "../Components/StyledButton";
//import { HeaderStyleInterpolators } from "react-navigation-stack";
import Unorderedlist from 'react-native-unordered-list';// you must install using termanial and npm
//import Pdf from "react-native-pdf";
//import images from "./images";


export default class Handbook extends Component {
        
        
        render(){
           // const source = {uri: 'bundle-assets://assets/to/TMDTableofContents.pdf '};
            return(
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style = {styles.containerHeader}
                        onPress={()=>{Actions.scene2("MenuScreen")}}
                        >
                            <Image
                                source= {require('../assets/BackArrow.png')}
                                resizeMode= "contain"
                                style ={styles.logoHeader}
                                >

                            </Image>
                    </TouchableOpacity>
                    <View style={styles.Natcontainer}>
                    
                        <PageListTwo />
                   
                    </View>
                </View>


                
            );
        }
}


const styles1 = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "blue"
    },
    container2: {
           flex: 1,
           backgroundColor: '#fff',
           alignItems: 'center',
           justifyContent: 'center',
         },
      
});
