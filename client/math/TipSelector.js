import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Alert } from 'react-native';
import Emoji from 'react-native-emoji';
// import { Picker } from '@react-native-community/picker';

const options = [
  {label: 'star-struck', value: 1234567890},
  {label: 'grin', value: 1},
  {label: 'slightly_smiling_face', value: 2},
  {label: 'neutral_face', value: 3},
  {label: 'face_vomiting', value: 4}
];

const TipSelector = ({}) => {
  const [choice, setChoice] = useState(1);
  const [modalVisable, setModalVisable] = useState(true);

  const change = (value, data) => {
    console.log(value, data);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisable}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {options.map((option, index) => (
              <Emoji
                key={index}
                name={option.label}
                value={option.value}
                style={{fontSize: 75}}
                onPress={(value)=>console.log(value)}
              />
            ))}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default TipSelector;
