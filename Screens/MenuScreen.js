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
    Linking
} from "react-native";
import {Actions, Router, Scene} from "react-native-router-flux";
//import CarItem from "../Components/CarItem";
import styles from "./styles"
import StyledButton from "../Components/StyledButton"
//import { HeaderStyleInterpolators } from "react-navigation-stack";


export default class MenuScreen extends Component {
        

        render(){
            return(
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style = {styles.containerHeader}
                        onPress={()=>{Actions.scene1("Home")}}
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
                        <Text style={styles.title}>{"Menu"}</Text>
                        <Text style={styles.subtitle}>{"Pick any below"}</Text>
                    </View> 


                    <View style = {styles.buttonsContainer}>

                        <StyledButton //first button
                            type="primary" //what color is the button 
                            content={"Handbook"}  //title of button
                            onPress={() => {  //what it does on press
                            //Alert.alert("Handbook was pressed");
                            Actions.scene3("Handbook")
                            }}/>

                        <StyledButton //first button
                            type="secondary" //what color is the button 
                            content={"Glossary"}  //title of button
                            onPress={() => {  //what it does on press
                            //Alert.alert("Glossary was pressed");
                            Actions.scene4("Glossary")
                            }}/>
                        <StyledButton //first button
                            type="primary" //what color is the button 
                            content={"Leadership"}  //title of button
                            onPress={() => {  //what it does on press
                            //Alert.alert("Leadership was pressed");
                            Actions.scene5("Leadership")
                            }}/>

                        <StyledButton //first button
                            type="Secondary" //what color is the button 
                            content={"Website"}  //title of button
                            onPress={() => {  //what it does on press
                            Linking.openURL('https://tmd.texas.gov/');
                            }}/>

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

















