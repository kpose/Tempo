import React, {useState, FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

type Style = {
  container: ViewStyle;
  location: TextStyle;
  condition: TextStyle;
  temperature: TextStyle;
  detailsContainer: TextStyle;
  imageContainer: ImageStyle;
};

import SearchInput from './src/components/SearchInput';

import getImageForWeather from './src/utils/getImageForWeather';
type Props = {
  text: string;
  placeholder: string;
  //newLocation: string;
  //onSubmit: (p: any) => void;
};

const App: FC<Props> = () => {
  const [location, setLocation] = useState('Nigeria');

  const onSubmit = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Snow')}
          style={styles.imageContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.condition}>Light Thunder</Text>
            <Text style={styles.temperature}>24°</Text>
            <SearchInput placeholder="Search any city" onSubmit={onSubmit} />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

export default App;

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: '#34495E',
    flex: 1,
  },
  location: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 40,
    padding: 10,
    color: 'white',
  },
  condition: {
    textAlign: 'center',
    fontFamily: 'Didot',
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  temperature: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'white',
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'cover',
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
    paddingHorizontal: 20,
  },
});
