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
    Alert
} from "react-native";
import {Actions, Router, Scene} from "react-native-router-flux";
import CarItem from "../Components/CarItem";
import styles from "./styles"
import StyledButton from "../Components/StyledButton"
//import { HeaderStyleInterpolators } from "react-navigation-stack";


export default class Glossary extends Component {
        

        render(){
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
                    
                    <ImageBackground 
                    source={require("../assets/TMDwallpaper7.jpg")}
                    style={styles.image}
                    />

                    <View style={styles.titles}> 
                        <Text style={styles.title}>{"Glossary"}</Text>
                        <Text style={styles.subtitle}>{"Terms Below"}</Text>
                    </View> 


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
