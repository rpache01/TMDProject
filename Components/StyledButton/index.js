import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

   // const type = props.type;
   // const content = props.content; //what is the button title
   // const onPress = props.onPress; //what it does on the press

    const { type, content, onPress} = props; //same as top 3 just one line

    //console.warn(type);

    const backgroundColor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type == 'primary' ? '#FFFFFF' : '#171A20';



  return (
      <View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress()} //fuction that user will use
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
      </View>
  );
};

export default StyledButton;