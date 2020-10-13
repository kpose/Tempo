import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';



interface Props{
    placeholder: string
}


export default function SearchInput(props: Props) {
    return (
        <View  style = {styles.container}>
            <TextInput
                autoCorrect={false}
                placeholder= {props.placeholder}
                placeholderTextColor='white'
                //enablesReturnKeyAutomatically={true}
                style={styles.textInput}
                clearButtonMode='always'
           />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
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
 
  textInput: {
    flex: 1,
    color: 'white',
  },

});
