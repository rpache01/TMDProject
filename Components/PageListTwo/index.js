import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItemT from '../CarItemT';

import styles from './styles'; //styles wanted from PageList
import page from './page'; //array with different pages

// this will be used to render multiple posts in a feed
const PageListTwo= (props) => {
  
  return(
      <View style= {styles.container}>
          <FlatList 
            data= {page}
            renderItem= {({item}) => <CarItemT pages = {item}/> }
            showsVerticalScrollIndicator = {false}
            //snapToAlignment = {"start"}
            decelerationRate = {"fast"}
            //snapToInterval = {Dimensions.get('window').height}
          />
      </View>
  );
};

export default PageListTwo;