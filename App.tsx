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
  searchContainer: TextStyle;
  imageContainer: ImageStyle;
  conditionBox: ViewStyle;
  date: ViewStyle;
  bar: ViewStyle;
};
import api from './src/utils/api';
import dateBuilder from './src/utils/dateBuilder';
import SearchInput from './src/components/SearchInput';

import getImageForWeather from './src/utils/getImageForWeather';

type Props = {
  text: string;
  placeholder: string;
  name: string;
  //newLocation: string;
  //onSubmit: (p: any) => void;
};

const App: FC<Props> = () => {
  const [, setLocation] = useState('Nigeria');
  const [weather, setWeather] = useState({});

  const onSubmit = (newLocation: string) => {
    setLocation(newLocation);

    fetch(`${api.base}weather?q=${newLocation}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        //setLocation('');
        console.log(result);
      });
  };

  /* useEffect(() => {
    console.log('Top rendered');
  }, []); */

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Snow')}
          style={styles.imageContainer}>
          <View style={styles.conditionBox}>
            {typeof weather.main != 'undefined' ? (
              <View>
                <Text style={styles.location}>
                  {weather.name}, {weather.sys.country}
                </Text>
                <Text style={styles.date}>{dateBuilder(new Date())}</Text>
                <Text style={styles.condition}>
                  {weather.weather[0].description}
                </Text>
                <Text style={styles.temperature}>
                  {Math.round(weather.main.temp)}°c
                </Text>
              </View>
            ) : (
              <Text style={styles.date}>error</Text>
            )}
          </View>

          <View style={styles.searchContainer}>
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
    fontWeight: 'bold',
    fontSize: 50,
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
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    //paddingHorizontal: 20,
  },
  conditionBox: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',

    //paddingHorizontal: 20,
  },
  date: {
    textAlign: 'center',
    fontFamily: 'Didot',
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: 25,
    padding: 10,
    color: 'white',
    textShadowColor: 'blue',
  },
  bar: {
    height: 500,
    width: 300,
    backgroundColor: 'red',
  },
});
