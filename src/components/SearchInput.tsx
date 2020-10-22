import React, {useState, FC} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

type Props = {
  text?: string;
  placeholder: string;
  onSubmit: (p: any) => void;
};

const SearchInput: FC<Props> = (props) => {
  const [newlocation, setNewlocation] = useState<string | null>();

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
        onSubmitEditing={() => props.onSubmit(newlocation)}
      />
    </View>
  );
};

export default SearchInput;

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
