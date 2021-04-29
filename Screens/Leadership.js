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
    Button
} from "react-native";
import {Actions, Router, Scene} from "react-native-router-flux";
import CarItem from "../Components/CarItem";
import styles from "./styles"
import StyledButton from "../Components/StyledButton"
//import { HeaderStyleInterpolators } from "react-navigation-stack";


export default class Leadership extends Component {
        

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
                        <Text style={styles.title}>{"Core Aspects of Leadership"}</Text>

                        <Text style={styles.subtitle}>{"Duty.Honor.Texas"}</Text>

                        
                        
                    
                    </View> 
                    <View style={styles.buttonsContainerLE}>
                            <StyledButton //first button
                            type="secondary" //what color is the button 
                            content={"Soldier Lethality"}  //title of button
                            onPress={() => {  //what it does on press
                            Alert.alert("Soldier Lethality");
                            //Actions.scene3("Handbook")
                            }}/>
                            <StyledButton //first button
                            type="secondary" //what color is the button 
                            content={"Company Admin"}  //title of button
                            onPress={() => {  //what it does on press
                            Alert.alert("Company Admin was pressed");
                            //Actions.scene3("Handbook")
                            }}/>
                            <StyledButton //first button
                            type="secondary" //what color is the button 
                            content={"Training Management"}  //title of button
                            onPress={() => {  //what it does on press
                            Alert.alert("Handbook was pressed");
                            //Actions.scene3("Handbook")
                            }}/>
                            <StyledButton //first button
                            type="secondary" //what color is the button 
                            content={"Talent Management"}  //title of button
                            onPress={() => {  //what it does on press
                            Alert.alert("Handbook was pressed");
                            //Actions.scene3("Handbook")
                            }}/>
                            <StyledButton //first button
                            type="secondary" //what color is the button 
                            content={"Logistics"}  //title of button
                            onPress={() => {  //what it does on press
                            Alert.alert("Handbook was pressed");
                            //Actions.scene3("Handbook")
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
