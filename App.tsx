import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';


import SearchInput from './src/components/SearchInput'

import getImageForWeather from './src/utils/getImageForWeather'


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container} behavior='padding'> 

      <ImageBackground
        source={getImageForWeather('Hail')}
        style={styles.imageContainer}
        >

         <View style = {styles.detailsContainer}>
            <Text style={styles.location}>Lagos, Nigeria</Text>
            <Text style={styles.condition}>Weather Condition</Text>
            <Text style={styles.temperature}>24°</Text>
            <SearchInput placeholder="Search any city" />
         </View>

        </ImageBackground>
        
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495E',
    flex: 1,
  },
  location: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 40,
    padding: 10
  },
  condition: {
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 20,
    padding: 10
  },
  temperature: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 20
  },
  imageContainer: {
    flex: 1
  },
  /* image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'cover'
  }, */
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20
  }
});

export default App;
