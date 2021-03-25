import { createFactory } from "react";
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View, Text, ImageBackground} from "react-native"; //importing view and text from react
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => { //arrow function

    const { name, tagline, image} = props.pages; //these are the different properties for each page made
                                            // These prop go in text instead of hard coding below
    return (  //returning a view with just not a component 
        <View style={styles.Natcontainer}>
   
        <ImageBackground 
        source={image}
        style={styles.image}
        />
     
       <View style={styles.titles}> 
         <Text style={styles.title}>{name}</Text>
         
       </View> 


        <View style={styles.buttonsContainer}>
          <Text style={styles.subtitle}>{tagline}</Text>
               
        </View>
     </View> //type = primary is sending information/properties from parent to child component
     
    );

}; 

export default CarItem;
          /* <StyledButton //first button
            type="primary" //what color is the button 
            content={"Handbook"}  //title of button
            onPress={() => {  //what it does on press
              console.warn("Handbook was pressed");
            }}
            />   

            <StyledButton // second button
            type="secondary" 
            content={"Glossary"} 
            onPress={() => {
              console.warn("Glossary was pressed") 
            }} */