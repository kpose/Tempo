import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';


import SearchInput from './src/components/SearchInput'



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={styles.container} behavior='padding'> 
        <Text style={styles.location}>Lagos, Nigeria</Text>
        <Text style={styles.condition}>Weather Condition</Text>
        <Text style={styles.temperature}>24°</Text>
        

        <SearchInput placeholder="Search any city" />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height:60,
    width: 300,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 20
  },

});

export default App;
