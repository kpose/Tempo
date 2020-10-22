import React, {useState, FC} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

interface Props {
  text: string;
  complete: boolean;
  placeholder: string;
}

export const SearchInput: React.FC<Props> = (props) => {
  const [newlocation, setNewlocation] = useState<string | null>();

  onSubmitEditing = () => {
    props.onSubmitEditing(newlocation);
  };

  return (
    <View style={styles.container}>
      <TextInput
        //defaultValue={props.value}
        autoCorrect={false}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={(text) => setNewlocation(text)}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 60,
    width: 300,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 20,
  },

  textInput: {
    flex: 1,
    color: 'white',
  },
});
