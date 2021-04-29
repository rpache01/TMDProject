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
    FlatList
} from "react-native";
import {Actions, Router, Scene} from "react-native-router-flux";
import CarItem from "../Components/CarItem";
import styles from "./styles"
import StyledButton from "../Components/StyledButton"
//import { HeaderStyleInterpolators } from "react-navigation-stack";
import {FlatListSlider} from 'react-native-flatlist-slider'; //install using npm i react-native-flatlist-slider


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
                    source={require("../assets/TMDwallpaper9.jpg")}
                    style={styles.image}
                    />

                    <View style={styles.titles}> 
                        <Text style={styles.title}>{"Glossary"}</Text>
                        <Text style={styles.space}></Text>
                    </View>

                   
                        <FlatListSlider
                            data={images}
                            imageKey={'banner'}
                            width= {400}
                            height= {500}
                            contentContainerStyle={{paddingVertical: 5}}
                            indicatorContainerStyle={{position:'absolute', bottom: 10}}
                            local
                            timer= {20000}
                        />
                    {/*
                    The flatlistslider helps to see multiple images in one page
                    */}


                    </View>
                </View>


                
            );
        }
}
const images =[
    {banner: require('../assets/Terms11.jpg')},
    {banner: require("../assets/Terms22.jpg")},
    {banner: require("../assets/Terms33.jpg")}
]

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
