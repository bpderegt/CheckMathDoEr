import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddName = ({ addName }) => {
  const [newName, onNewNameChange] = useState('');

  const nameSubmit = () => {
    addName(newName);
    onNewNameChange('')
  }

  return (
    <View style={styles.container}>
      <Button title="Add Name" onPress={() => nameSubmit()}/>
      <TextInput style={styles.textInput} value={newName} onChange={(e) => onNewNameChange(e.nativeEvent.text)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // minWidth: '100%'
    maxHeight: 40,
  },
  button: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  }
})

export default AddName