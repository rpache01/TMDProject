import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from '../CarItem';

import styles from './styles'; //styles wanted from PageList
import page from './page'; //array with different pages

// this will be used to render multiple posts in a feed
const PageList= (props) => {
  
  return(
      <View style= {styles.container}>
          <FlatList 
            data= {page}
            renderItem= {({item}) => <CarItem pages = {item}/> }
            showsVerticalScrollIndicator = {false}
            snapToAlignment = {"start"}
            decelerationRate = {"fast"}
            snapToInterval = {Dimensions.get('window').height}
          />
      </View>
  );
};

export default PageList;
